export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" aria-label="EthnanDev home" className={`text-xl font-black tracking-tight text-brand ${className}`}>
      Ethnan<span className="text-ink">Dev</span>
    </a>
  );
}
