import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copy from "./Copy";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account?.appwriteItemId}`}
        className="bank-card min-w-[320px]"
      >
        <div className="bank-card_content">
          <div className="">
            <h1 className="text-16 font-semibold text-white">{userName}</h1>

            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account?.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white"> ●●/●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image alt="pay" src={"/icons/Paypass.svg"} width={20} height={24} />
          <Image
            alt="mastercard"
            src={"/icons/mastercard.svg"}
            width={45}
            height={32}
            className="ml-5"
          />
        </div>

        <Image
          alt="lines"
          src={"/icons/lines.png"}
          width={316}
          height={190}
          className="absolute top-0 left-0"
        />
      </Link>

      {/* COPY CARD NUMBER */}
      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  );
};

export default BankCard;
