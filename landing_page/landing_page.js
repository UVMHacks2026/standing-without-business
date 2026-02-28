const supabase_url = "https://zuhqfrmrubbxntpzhkzl.supabase.co";
const supabase_key = "sb_publishable_mXKpTqxjwXMPiGsDdchoqQ_jHgCf2Gh";

window.db = window.supabase.createClient(supababase_url, supabase_key);

async function getUser() {
    const { data, error } = await window.db.auth.getUser();
    if (error) {
        console.error(error.message);
        return;
    }
    if (!data.user) {
        console.log("no user");
        return;
    }
    console.log("success!", data.user.id);
}

window.addEventListener("load", getUser);
