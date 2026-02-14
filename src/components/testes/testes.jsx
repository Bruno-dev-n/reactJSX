import Lottie from "lottie-react";
import waveLoading from "../../assets/wave-loading.json"; // ajuste o caminho conforme o nome real

export default function TesteAnimacao() {
  console.log("Conteúdo do JSON:", waveLoading); // só pra ver no console
return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
    <Lottie animationData={waveLoading} loop={true} style={{ width: 200, height: 200 }} />
    </div>
    );
}

