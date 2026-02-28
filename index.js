const supabase_url = "https://zuhqfrmrubbxntpzhkzl.supabase.co";
const supabase_key = "sb_publishable_mXKpTqxjwXMPiGsDdchoqQ_jHgCf2Gh";

const supabase = window.supabase.createClient(
  supabase_url,
  supabase_key
);
document.getElementById('google-login')?.addEventListener('click', async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/landing_page/landing_page.html`
    }
})
});