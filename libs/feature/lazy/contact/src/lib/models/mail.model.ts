export type Mail = {
  name: string;
  email: string;
  body: string;
};

export type RegisteredMail = {
  trackerId: string;
  mail: Mail;
};
