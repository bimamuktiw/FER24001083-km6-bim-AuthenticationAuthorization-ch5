import { Icon } from "@iconify/react";
import { cn } from "../../../lib/utils";

export default function Button({
  id,
  type,
  onClick,
  children,
  options,
  loading,
  className,
  variant,
}) {
  const style =
    "px-[16px] py-1 min-h-[20px] rounded-lg cursor-pointer flex justify-center items-center gap-2";
  const variants = {
    primary:
      "bg-[#004E98] text-white border border-[#004E98] hover:bg-[#023f79] hover:border-[#023f79 duration-150",
    "primary-outlined":
      "border border-[#004E98] text-[#004E98] hover:bg-[#023f79] hover:border-[#023f79 hover:text-white duration-150",
    "white":
      "bg-white border border-white hover:bg-[#d1d1d1] hover:border-[#d1d1d1] duration-150",
  };

  if (loading)
    return (
      <button
        id={id}
        className={cn(style, `${variants[variant || "primary"]}`, className)}
        disabled
        {...options}
      >
        <Icon icon="eos-icons:bubble-loading" height={25} />
      </button>
    );

  return (
    <button
      id={id}
      type={type}
      onClick={() => onClick && onClick()}
      className={cn(style, `${variants[variant || "primary"]}`, className)}
      {...options}
    >
      {children}
    </button>
  );
}
