import { supabase } from "../../utils/supabaseClient";

export default async function registerUser(req, res) {
  const { email, password } = req.body;
  let { user, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  console.log({ error });
  console.log({ user });
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ user: user });
}
