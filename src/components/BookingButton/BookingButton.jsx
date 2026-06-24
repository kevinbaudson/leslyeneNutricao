import "./BookingButton.css";

export default function BookingButton({
  text = "Agendar consulta",
  link = "https://cal.com/kevin-baudson-ke0ucp/30min",
  variant = "primary",
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`booking-button ${variant}`}
    >
      {text}
    </a>
  );
}