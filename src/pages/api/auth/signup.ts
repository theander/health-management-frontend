export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password } = data;
    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 3
    ) {
      res.status(422).json({ message: 'Invalid login and password' });
    }
    // const client = await connectToDatabase();
    // const db = client.db();
    // const hashedPassword = await hashPassword(password);

    // const result = await db.collection('users').insertOne({
    //   email: email,
    //   password: hashedPassword,
    // });
    res.status(201).json({ message: 'Created admin!' });
  }
}
