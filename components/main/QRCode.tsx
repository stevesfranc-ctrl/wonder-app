import { useQRCode } from "next-qrcode";

export default function MyQRCode() {
  const { SVG } = useQRCode();

  return (
    <div className="
        min-h-[200px]
        min-w-[200px]
        rounded-lg
        bg-white
        p-3
      ">
      <SVG
        text="https://steveswork.tech//steves_franc_t_cv.pdf"
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
