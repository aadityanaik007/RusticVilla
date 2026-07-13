# Deploying the Booking API

The backend code is done and tested locally (SQLite). Going live needs four
free accounts — Neon (or Supabase) for the database, Cloudinary for image
uploads from the admin panel, Brevo for sending booking emails, and Vercel
for hosting the API. All are one-time setups.

## 1. Create the database (Neon)

1. Go to https://neon.tech and sign up (free tier is enough for this).
2. Create a new project — any name, e.g. "rustic-farm-villa".
3. On the project dashboard, copy the **connection string** (it looks like
   `postgresql://user:password@ep-something.neon.tech/dbname?sslmode=require`).
4. Keep that string handy for step 4 below.

(Supabase works the same way if you'd rather use that — create a project,
then find the Postgres connection string under Project Settings → Database.)

## 2. Create the Cloudinary account (for admin image uploads)

1. Go to https://cloudinary.com and sign up (free tier is enough for this).
2. On your Cloudinary Dashboard, copy the **Cloud name**, **API Key**, and
   **API Secret**.
3. Keep those three values handy for step 4 below.

## 3. Create the Brevo account (for booking emails)

1. Go to https://www.brevo.com and sign up (free tier gives 300 emails/day).
2. **Verify a sender**: under Senders, Domains & Dedicated IPs → Senders, add
   and verify the email address you want bookings to be sent *from* (Brevo
   will email you a confirmation link). Brevo won't send anything from an
   unverified sender.
3. Get your **API key**: under your account name (top right) → SMTP & API →
   API Keys → Generate a new API key.
4. Keep the API key and the verified sender address handy for step 5.

## 4. Create the Vercel project

1. Push this repo to GitHub if it isn't already there.
2. Go to https://vercel.com, sign up/log in, and click "Add New → Project".
3. Import this GitHub repo.
4. **Important:** in the project's configuration screen, set **Root Directory**
   to `backend` (not the repo root) — this repo has the React site at the
   root and the API in the `backend/` folder.
5. Framework preset: choose "Other" (Vercel will detect `vercel.json` and use
   the Python runtime automatically).

## 5. Set environment variables

In the Vercel project → Settings → Environment Variables, add:

| Name | Value |
|---|---|
| `DATABASE_URL` | the Neon/Supabase connection string from step 1 |
| `ADMIN_SECRET_KEY` | any password you choose — this is what unlocks `/admin` on the site |
| `ALLOWED_ORIGINS` | your live site URL, e.g. `https://www.rusticfarmvilla.com` (comma-separate if you need more than one, e.g. add `http://localhost:3000` too while testing) |
| `CLOUDINARY_CLOUD_NAME` | the Cloud name from step 2 |
| `CLOUDINARY_API_KEY` | the API Key from step 2 |
| `CLOUDINARY_API_SECRET` | the API Secret from step 2 |
| `BREVO_API_KEY` | the API key from step 3 |
| `BREVO_SENDER_EMAIL` | the verified sender address from step 3 |
| `BREVO_SENDER_NAME` | (optional) the name emails are sent from, e.g. "Rustic Farm Villa" |
| `ADMIN_NOTIFICATION_EMAIL` | the email address that should receive new booking notifications |

## 6. Deploy

Click "Deploy". Once it finishes, Vercel gives you a URL like
`https://rustic-farm-villa-api.vercel.app`.

## 7. Connect the frontend

Send me that URL (or add it yourself) as `REACT_APP_BOOKING_API_URL` in the
website's `.env` file, e.g.:

```
REACT_APP_BOOKING_API_URL=https://rustic-farm-villa-api.vercel.app
```

Then rebuild/redeploy the website (Netlify). The Contact page calendar and
`/admin` will start talking to the real backend at that point — until then,
the calendar just shows all dates as open and `/admin` shows a "not
configured yet" notice, so nothing breaks in the meantime.

## Using /admin

Visit `yoursite.com/admin`, enter the `ADMIN_SECRET_KEY` you set in step 4
(it's remembered in the browser after that). From there you can:

- **Bookings tab** — manually add or remove bookings, no code changes needed.
  When a guest submits the "Book Your Stay" form on the Contact page, it now
  also shows up here automatically as a **Pending** request (with their name,
  email, phone, guest count, package, and message) — their dates are *not*
  blocked on the public calendar until you click **Confirm**. Click **Reject**
  to decline a request instead (same as Remove). Confirming will refuse to go
  through if the dates already overlap another confirmed booking, so you can't
  accidentally double-book. Submitting the form also automatically emails the
  guest a confirmation and emails you (`ADMIN_NOTIFICATION_EMAIL`) a
  notification, both via Brevo — no EmailJS involved anymore.
- **Site Content tab** — edit the text (descriptions, contact details) and
  swap out images shown across the site. Text edits apply immediately after
  saving; image uploads go straight to Cloudinary and update on the live
  site right away too — no rebuild or redeploy needed for either.
- **Gallery tab** — add brand-new photos to the /gallery page (not just swap
  existing ones) and pick which category each one shows up under (Interior,
  Outdoor, Activities, Dining, First Floor). You can also remove any photo
  you've added this way.
