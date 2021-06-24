export type MailDeliveryStatus = {
  trackerId: string;
  hasError?: boolean;
  sending?: boolean;
  sent?: boolean;
};
