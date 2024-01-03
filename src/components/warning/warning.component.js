import React from "react";
import { Text } from "../typography/text.component";

export const Warning = ({ condition, status, message }) => {
  if (condition) {
    return <Text variant={status}>{message}</Text>;
  } else {
    return null;
  }
};
