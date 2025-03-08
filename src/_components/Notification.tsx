import { wrapText33 } from "@/_utils/helpers";

type TypeEnum = "info" | "warning" | "success" | "error" | "loading";
interface PropTypes {
  message: string;
  type?: TypeEnum;
}

export function Notification({ message }: PropTypes) {
  const firstLine = ".::::::::::: [ALERT] :::::::::::.";
  const padddLine = "|                               |";
  const lasttLine = "'-------------------------------'";
  const contentLines = wrapText33(message, firstLine.length); // Send message and content line length we want

  return (
    <div className="notification-wrapper">
      <pre className="notification">{`${firstLine}
${padddLine}
${contentLines.join("\n")}
${padddLine}
${lasttLine}`}</pre>
    </div>
  );
}
