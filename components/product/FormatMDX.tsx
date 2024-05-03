// components/FormattedText.js
import React from "react";

const FormattedText = ({ text }: any) => {
  const formatheading = (text: string) => {
    let txt = text.replace(/#/g, "");
    txt = txt.replace("**", "");
    txt = txt.replace("--", "");
    txt = txt.replace("--**", "");
    txt = txt.replace("**--", "");
    return txt;
  };

  const formatunderline = (text: string) => {
    let txt = text.replace(/--/g, "");
    txt = txt.replace("**", "");
    txt = txt.replace("**", "");

    return txt;
  };

  const formatnormal = (text: string) => {
    let txt = text.replace("**", "");
    txt = txt.replace("**", "");
    txt = txt.replace("--", "");
    txt = txt.replace("--", "");
    return txt;
  };

  const formattedText = text?.split("\n").map((line: any, index: any) => {
    if (line.startsWith("###")) {
      // Increase text size
      return (
        <h1 key={index} className="text-2xl font-bold underline">
          {formatheading(line)}
        </h1>
      );
    } else if (line.startsWith("- ")) {
      // Replace bullet points
      return (
        <li key={index} className="ml-4 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.startsWith(" - ")) {
      // Replace bullet points
      return (
        <li key={index} className="ml-4 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.startsWith("--")) {
      // Underline text
      return (
        <h2 key={index} className="font-bold underline">
          {formatunderline(line)}
        </h2>
      );
    } else if (line.startsWith("**")) {
      // Bold text
      return (
        <span key={index} className="font-bold">
          {line.replace(/\*\*/g, "")}
        </span>
      );
    } else {
      return <p key={index}>{formatnormal(line)}</p>;
    }
  });

  return <div className="space-y-2 p-4">{formattedText}</div>;
};

export default FormattedText;
