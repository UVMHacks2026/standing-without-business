const supababase_url = "https://zuhqfrmrubbxntpzhkzl.supabase.co";
const supabase_key = "sb_publishable_mXKpTqxjwXMPiGsDdchoqQ_jHgCf2Gh";

const supabase = window.supabase.createClient(
  supababase_url,
  supabase_key
);
document.getElementById('google-login')?.addEventListener('click', async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://127.0.0.1:3000/landing_page/landing_page.html'
    }
})
});