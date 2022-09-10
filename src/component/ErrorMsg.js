const ErrorMsg = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 15,
          marginBottom: 15,
          backgroundColor: "Lightblue",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMsg;