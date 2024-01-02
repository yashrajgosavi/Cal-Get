import React from "react";
import { Text } from "../typography/text.component";

export const Warning = ({ condition, status, message }) => {
  if (condition) {
    return <Message status={status} message={message} />;
  } else {
    return null;
  }
};

export const Message = ({ status, message }) => {
  return <Text variant={status}>{message}</Text>;
};
