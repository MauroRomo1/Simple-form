import React, { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Componente montado :D");

    return () => {
      console.log("Componente desmontado :(");
    };
  }, []);

  return (
    <div className="mt-3">
      <div className="alert alert-info" role="alert">
        Gracias por aceptar los términos y condiciones
      </div>
    </div>
  );
};

export default Message;
