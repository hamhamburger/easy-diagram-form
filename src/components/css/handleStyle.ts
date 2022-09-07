export const handleStyle = {
    background: "#555",
    border: "1px solid #fff",
    borderRadius: "0%",
    height: "6px",
    width: "1rem",
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    height: "1rem",
    position:"static",
    "&:hover": {
        background: "#white"
      }
}
