import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32 text-[0.95rem] font-bold text-center">
      {/* Powered by */}
      <p>
        ᴘᴏᴡᴇʀᴇᴅ ʙʏ{" "}
        <Link
          href="https://t.me/purvi_bots"
          target="_blank"
          className="underline text-primary hover:opacity-90"
        >
          ᴘᴜʀᴠɪ ʙᴏᴛs
        </Link>
      </p>

      {/* Dev + GitHub */}
      <p className="mt-2">
        ᴅᴇᴠ :-{" "}
        <Link
          href="https://t.me/Thesigmacoder"
          target="_blank"
          className="underline text-primary hover:opacity-90"
        >
          ᴀʟᴘʜᴀ-ʙᴀʙʏ
        </Link>{" "}
        <span className="opacity-60 mx-2">•</span>
        ɢɪᴛʜᴜʙ :-{" "}
        <Link
          href="https://github.com/TEAMPURVI"
          target="_blank"
          className="underline text-primary hover:opacity-90"
        >
          ᴛᴇᴀᴍᴘᴜʀᴠɪ
        </Link>
      </p>

      {/* All copyrights */}
      <p className="text-xs mt-3">
        © ᴀʟʟ ᴄᴏᴘʏʀɪɢʜᴛs ʀᴇsᴇʀᴠᴇᴅ ʙʏ ᴘᴜʀᴠɪ ʙᴏᴛs
      </p>
    </footer>
  );
}
