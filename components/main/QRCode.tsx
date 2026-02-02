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
        text="http://localhost:3000/wonder-app/steves_franc_t_cv.pdf"
        
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
