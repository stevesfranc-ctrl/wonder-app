import { useQRCode } from "next-qrcode";

export default function MyQRCode() {
  const { SVG } = useQRCode();

  return (
    <div className="
        h-full
        w-full
        rounded-lg
        bg-white
        p-3
      ">
      <SVG
        text="https://kerima-app.vercel.app/"
        
        options={{
          margin: 2,
          width: 200,
          
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        }}
      />
    </div>
  );
}
