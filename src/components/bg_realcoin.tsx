import { PropsWithChildren } from "react";
interface IBGRealCoinProps extends PropsWithChildren {
  textContent: any;
  colorBgUp: string;
  colorBgBelow: string;
  isShowTextRC: boolean;
}

const BGRealCoin: React.FC<IBGRealCoinProps> = (props) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div
        className={`relative w-full lg:h-[300px] h-[200px] ${
          props.colorBgUp ?? "bg-lightSilver"
        }  overflow-hidden content-end`}
      >
        <div
          className={`absolute w-[2000px] h-[350px] ${
            props.colorBgBelow ?? "bg-primaryBlack"
          } rotate-[7deg] top-[170px] left-[-50px]`}
        ></div>
        {props.isShowTextRC ? (
          <p
            className="absolute rotate-[7deg] lg:top-[190px] top-[125px] lg:text-[60px] text-[32px] text-primaryBlack truncate font-black"
            style={{ animation: "rotate-marquee 15s linear infinite" }}
          >
            {"realcoin-realcoin-realcoin-realcoin-realcoin-realcoin-realcoin-realcoin-realcoin".toUpperCase()}
          </p>
        ) : (
          <div />
        )}
        {props.textContent}
      </div>
      {props.children}
    </div>
  );
};
export default BGRealCoin;
