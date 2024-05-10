import Nav from "@/components/nav";
import React from "react";
import Image from "next/image";
import Donation from "@/components/donation";
import Payment from "@/components/payment";

function Donate() {
  return (
    <div>
      <Nav />
      <Donation />
      <Payment />
    </div>
  );
}

export default Donate;
