import React from "react";
import TimelineTitle from "../timelineTitle";
import hexToRgba from "../../../utils/hexToRbg";

type Props = {
  children: React.ReactNode;
  color: string;
  lightColor: string;
  veryLightColor: string;
  className?: string;
  isLastSection?: boolean;
  title: string;
  icon: "education" | "experience" | "projects";
};

const TimelineSection = ({
  color,
  lightColor,
  veryLightColor,
  children,
  className,
  title,
  isLastSection = false,
  icon,
}: Props) => {
  return (
    <section
      className={`relative flex flex-row items-center w-auto bg-white pr-[90px] h-view ${className}`}
    >
      <div
        className="absolute w-full h-[1px] top-1/2 transform -translate-y-1/2 z-[1]"
        style={{
          backgroundColor: hexToRgba(color, 0.65),
        }}
      ></div>
      <TimelineTitle
        title={title}
        color={color}
        lightColor={lightColor}
        veryLightColor={veryLightColor}
      >
        {icon === "education" ? (
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.1616 6.52845L16.3113 0.328096C15.9078 0.112686 15.4574 0 15 0C14.5426 0 14.0922 0.112686 13.6887 0.328096L1.8384 6.52845C1.35912 6.7761 0.960514 7.15544 0.689446 7.62187C0.418378 8.0883 0.286122 8.62243 0.308227 9.16146C0.330332 9.70049 0.50588 10.222 0.814229 10.6647C1.12258 11.1073 1.55091 11.4528 2.04886 11.6603L4.07247 12.4536V18.7511C4.05842 19.5405 4.25688 20.3192 4.64707 21.0056C5.03727 21.692 5.60484 22.2609 6.29035 22.6526C8.93914 24.1813 11.9417 24.9906 15 25C18.0745 24.9814 21.0918 24.1671 23.7582 22.6364C24.4239 22.2426 24.9746 21.681 25.3553 21.0078C25.7359 20.3345 25.9333 19.5731 25.9275 18.7996V12.4536L27.9511 11.6603C28.4491 11.4528 28.8774 11.1073 29.1857 10.6647C29.4941 10.222 29.6696 9.70049 29.6918 9.16146C29.7139 8.62243 29.5816 8.0883 29.3105 7.62187C29.0395 7.15544 28.6409 6.7761 28.1616 6.52845ZM23.4992 18.7996C23.5075 19.1493 23.4237 19.495 23.256 19.8019C23.0883 20.1088 22.8427 20.3662 22.544 20.548C20.2482 21.8674 17.6479 22.565 15 22.5717C12.3675 22.5648 9.78284 21.867 7.50452 20.548C7.199 20.3698 6.94555 20.1145 6.76944 19.8077C6.59332 19.501 6.5007 19.1534 6.50081 18.7996V13.5221L13.8991 16.6303C14.6061 16.9115 15.3939 16.9115 16.1008 16.6303L23.4992 13.5221V18.7996ZM27.0122 9.41008L15.1619 14.3801C15.1114 14.4044 15.0561 14.4171 15 14.4171C14.9439 14.4171 14.8886 14.4044 14.8381 14.3801L2.98781 9.41008C2.9167 9.38131 2.85569 9.33214 2.81248 9.26876C2.76926 9.20538 2.74578 9.13063 2.74498 9.05392C2.74329 8.9767 2.76373 8.90061 2.80389 8.83463C2.84405 8.76865 2.90226 8.71554 2.97163 8.68158L14.8057 2.46503H15H15.1943L27.0284 8.68158C27.0977 8.71554 27.1559 8.76865 27.1961 8.83463C27.2362 8.90061 27.2567 8.9767 27.255 9.05392C27.2542 9.13063 27.2307 9.20538 27.1875 9.26876C27.1443 9.33214 27.0833 9.38131 27.0122 9.41008Z"
              fill={color}
            />
          </svg>
        ) : icon === "experience" ? (
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0237 11.4917H17.365C17.0438 11.5007 16.7271 11.4152 16.454 11.2458C16.181 11.0763 15.9637 10.8305 15.8292 10.5387C15.6947 10.2469 15.6488 9.92198 15.6972 9.60433C15.7457 9.28668 15.8863 8.99024 16.1017 8.75181C16.8945 7.79099 17.3294 6.58489 17.3322 5.33924C17.3361 4.51077 17.1451 3.69301 16.7745 2.952C16.404 2.21099 15.8645 1.5675 15.1994 1.07352C14.5303 0.571512 13.753 0.232924 12.9298 0.0847925C12.1065 -0.0633393 11.26 -0.0169103 10.4579 0.220371C9.60928 0.46999 8.83641 0.927412 8.20929 1.55118C7.58216 2.17496 7.1206 2.94536 6.86643 3.79258C6.61226 4.6398 6.57353 5.53705 6.75373 6.40302C6.93394 7.269 7.32738 8.07631 7.89842 8.75181C8.14543 9.05315 8.28409 9.4287 8.29218 9.81824C8.29218 10.2534 8.11932 10.6707 7.81164 10.9784C7.50395 11.2861 7.08664 11.4589 6.65151 11.4589H2.97643C2.59723 11.4611 2.22216 11.5379 1.87265 11.685C1.52313 11.8321 1.20602 12.0466 0.939405 12.3162C0.672792 12.5859 0.461904 12.9054 0.318783 13.2566C0.175662 13.6078 0.103111 13.9837 0.105271 14.3629L0.105271 16.3809C0.105271 17.4774 0.540866 18.529 1.31623 19.3044C2.09159 20.0798 3.14321 20.5154 4.23974 20.5154C5.20914 20.511 6.1454 20.1621 6.88121 19.531C7.49564 19.0503 8.2753 18.8323 9.04994 18.9245C9.82458 19.0167 10.5313 19.4117 11.0157 20.0232C11.2841 20.3825 11.464 20.7999 11.541 21.2418C11.618 21.6836 11.5898 22.1373 11.4587 22.5662C11.335 23.0299 11.0931 23.4536 10.7567 23.7959C10.4202 24.1381 10.0007 24.3871 9.53908 24.5186C9.0904 24.6428 8.61813 24.6555 8.16345 24.5554C7.70877 24.4553 7.28546 24.2455 6.93043 23.9443C6.32938 23.4365 5.59541 23.1114 4.81539 23.0077C4.03536 22.9039 3.24195 23.0259 2.52905 23.359C1.81616 23.6921 1.21364 24.2226 0.792815 24.8875C0.371988 25.5524 0.150474 26.3239 0.154492 27.1108L0.154492 29.1288C0.158569 29.8806 0.455661 30.6011 0.982622 31.1373C1.50958 31.6734 2.22486 31.9829 2.97643 32L21.0237 32C21.7839 31.9957 22.5117 31.6918 23.0492 31.1543C23.5867 30.6168 23.8906 29.889 23.8949 29.1288L23.8949 14.3629C23.8906 13.6027 23.5867 12.8749 23.0492 12.3374C22.5117 11.7999 21.7839 11.496 21.0237 11.4917ZM21.4339 29.1288C21.4339 29.2376 21.3907 29.342 21.3137 29.4189C21.2368 29.4958 21.1325 29.539 21.0237 29.539L2.97643 29.539C2.86765 29.539 2.76332 29.4958 2.6864 29.4189C2.60948 29.342 2.56627 29.2376 2.56627 29.1288L2.56627 27.1108C2.56627 26.6757 2.73912 26.2584 3.0468 25.9507C3.35449 25.643 3.7718 25.4702 4.20693 25.4702C4.59648 25.4782 4.97203 25.6169 5.27336 25.8639C5.93054 26.4152 6.711 26.7997 7.54852 26.985C8.38604 27.1702 9.25588 27.1507 10.0842 26.928C10.9126 26.7054 11.675 26.2861 12.3068 25.7059C12.9385 25.1258 13.421 24.4017 13.7132 23.5953C14.0055 22.7888 14.0988 21.9238 13.9854 21.0736C13.872 20.2233 13.5551 19.413 13.0617 18.7114C12.5683 18.0097 11.9129 17.4375 11.1511 17.0432C10.3893 16.6489 9.54369 16.4442 8.68593 16.4465C7.45556 16.4476 6.26272 16.8703 5.30617 17.6442C5.06774 17.8596 4.77131 18.0003 4.45366 18.0487C4.13601 18.0972 3.81112 18.0513 3.51932 17.9167C3.22752 17.7822 2.98164 17.5649 2.81222 17.2919C2.64279 17.0189 2.55727 16.7021 2.56627 16.3809V14.3629C2.56627 14.2541 2.60948 14.1498 2.6864 14.0728C2.76332 13.9959 2.86765 13.9527 2.97643 13.9527H6.63511C7.42199 13.9567 8.19355 13.7352 8.85846 13.3144C9.52337 12.8936 10.0538 12.291 10.3869 11.5782C10.7201 10.8653 10.842 10.0718 10.7383 9.29182C10.6345 8.51179 10.3095 7.77782 9.80159 7.17678C9.49239 6.81645 9.27795 6.3847 9.17769 5.9206C9.07742 5.45651 9.09449 4.97474 9.22735 4.51891C9.35883 4.05733 9.60786 3.63779 9.95008 3.30132C10.2923 2.96485 10.716 2.72296 11.1797 2.59933C11.7707 2.42015 12.4035 2.43512 12.9853 2.64205C13.5671 2.84898 14.0672 3.23697 14.4123 3.74906C14.7573 4.26115 14.9292 4.87037 14.9025 5.4873C14.8759 6.10422 14.6521 6.69636 14.2642 7.17678C13.633 7.91258 13.2841 8.84885 13.2798 9.81824C13.2798 10.9148 13.7154 11.9664 14.4907 12.7418C15.2661 13.5171 16.3177 13.9527 17.4143 13.9527H21.0237C21.1325 13.9527 21.2368 13.9959 21.3137 14.0728C21.3907 14.1498 21.4339 14.2541 21.4339 14.3629L21.4339 29.1288Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.831 15.9097C33.2445 14.3007 34.1968 11.1811 33.0967 8.50487L32.5057 7.07645C31.5534 4.76142 29.3369 3.26732 26.8084 3.26732C26.5785 3.26732 26.3815 3.28374 26.2009 3.30015C25.8561 3.33299 25.6919 3.33299 25.4621 3.30015C24.8546 3.1688 24.2635 2.70908 23.7217 1.92099C22.8843 0.706003 21.538 0 20.1096 0C18.8782 0 17.7781 0.508979 16.99 1.32991C16.2019 0.508979 15.1019 0 13.8705 0C12.4421 0 11.0957 0.722422 10.2584 1.92099C9.71655 2.70908 9.12548 3.1688 8.51799 3.30015C8.28812 3.34941 8.12394 3.33299 7.77915 3.30015C7.59854 3.30015 7.40152 3.26732 7.13882 3.26732C4.64318 3.26732 2.42666 4.76142 1.49079 7.09287L0.883302 8.60339C-0.183912 11.2632 0.784789 14.3335 3.14908 16.0739C0.768371 17.6665 -0.183912 20.7368 0.883302 23.3966L1.49079 24.9071C2.42666 27.2386 4.64318 28.7327 7.17165 28.7327C7.40152 28.7327 7.59854 28.7163 7.77915 28.6998C8.12394 28.667 8.28812 28.667 8.51799 28.6998C9.12548 28.8312 9.71655 29.2909 10.2584 30.079C11.0957 31.294 12.4421 32 13.8705 32C15.1019 32 16.2019 31.491 16.99 30.6701C17.7781 31.491 18.8782 32 20.1096 32C21.538 32 22.8843 31.2776 23.7217 30.079C24.2635 29.2909 24.8546 28.8312 25.4621 28.6998C25.6919 28.6506 25.8561 28.667 26.2009 28.6998C26.3815 28.6998 26.5785 28.7327 26.8412 28.7327C29.3369 28.7327 31.5698 27.2386 32.5057 24.9236L33.0967 23.4951C34.1968 20.8189 33.2445 17.6993 30.831 15.9261V15.9097ZM13.8705 29.5372C13.2466 29.5372 12.6555 29.2088 12.2943 28.667C11.3748 27.3535 10.2912 26.549 9.04338 26.2699C8.73143 26.2042 8.45231 26.1878 8.18961 26.1878C7.95975 26.1878 7.76273 26.2042 7.5657 26.2206C7.41793 26.2206 7.27017 26.237 7.1224 26.2535C5.6283 26.2535 4.31481 25.3669 3.75657 23.9713L3.14908 22.4607C2.52517 20.8846 3.0834 19.0457 4.56108 18.0605C5.26709 17.6008 5.67756 16.8127 5.67756 15.9754C5.67756 15.138 5.26709 14.3499 4.49541 13.8574C3.0834 12.9215 2.50875 11.0826 3.14908 9.50641L3.75657 7.9959C4.31481 6.61673 5.6283 5.7137 7.07314 5.7137C7.25375 5.7137 7.40152 5.73012 7.54928 5.74654C7.95975 5.77937 8.41947 5.81221 9.01055 5.69728C10.2584 5.43458 11.342 4.63007 12.2614 3.30015C12.6391 2.75834 13.2301 2.42996 13.8376 2.42996C14.872 2.42996 15.7258 3.28374 15.7258 4.31811V27.6326C15.7258 28.667 14.872 29.5208 13.8376 29.5208L13.8705 29.5372ZM30.8145 22.5428L30.2235 23.9713C29.6652 25.3504 28.3353 26.237 26.8741 26.237C26.6935 26.237 26.5457 26.2206 26.3979 26.2042C25.9875 26.1714 25.5277 26.1385 24.9367 26.2535C23.6888 26.5162 22.6052 27.3207 21.6858 28.6506C21.3081 29.1924 20.7171 29.5208 20.1096 29.5208C19.0752 29.5208 18.2214 28.667 18.2214 27.6326V4.33453C18.2214 3.30015 19.0752 2.44638 20.1096 2.44638C20.7335 2.44638 21.3246 2.77476 21.6858 3.31657C22.6052 4.63007 23.6888 5.43458 24.9367 5.7137C25.5442 5.84505 26.0039 5.79579 26.3979 5.76296C26.5457 5.76296 26.6935 5.74654 26.8412 5.73012C28.3353 5.73012 29.6652 6.61673 30.2235 8.01231L30.8145 9.44074C31.4713 11.0498 30.8966 12.9051 29.3861 13.923C28.6965 14.3828 28.2697 15.1709 28.2697 16.0082C28.2697 16.8456 28.6801 17.6172 29.4518 18.1426C30.8966 19.1113 31.4549 20.9666 30.8145 22.5757V22.5428Z"
              fill={color}
            />
            <path
              d="M26.7426 9.83456C26.365 9.86739 25.3799 9.86739 24.444 9.21065C23.5902 8.61957 23.229 7.81506 23.0812 7.38817C22.8678 6.74784 22.1782 6.38663 21.5215 6.60008C20.8811 6.81352 20.5199 7.5031 20.7334 8.15985C20.9632 8.88227 21.5871 10.245 23.032 11.2466C24.3126 12.1332 25.6097 12.3138 26.4635 12.3138C26.6277 12.3138 26.7919 12.3138 26.9232 12.3138C27.5964 12.2645 28.1054 11.6734 28.0561 10.9839C28.0069 10.3107 27.4158 9.81814 26.7262 9.85097L26.7426 9.83456Z"
              fill={color}
            />
            <path
              d="M26.9396 19.686C26.1351 19.6203 24.5753 19.686 23.0483 20.7204C21.6035 21.7219 20.9796 23.0847 20.7497 23.8071C20.5363 24.4474 20.8975 25.1534 21.5378 25.3668C21.6692 25.4161 21.8005 25.4325 21.9155 25.4325C22.4409 25.4325 22.917 25.1042 23.0812 24.5788C23.229 24.1519 23.5902 23.3474 24.4439 22.7563C25.3798 22.116 26.3649 22.0995 26.7426 22.1488C27.4321 22.1652 28.0068 21.6891 28.0725 21.0159C28.1217 20.3427 27.6127 19.7517 26.9396 19.686Z"
              fill={color}
            />
            <path
              d="M12.4423 6.617C11.802 6.40356 11.096 6.74835 10.8825 7.4051C10.7347 7.83198 10.3735 8.6365 9.51976 9.22757C8.5839 9.8679 7.59878 9.8679 7.22115 9.83506C6.51514 9.78581 5.95691 10.2948 5.89123 10.968C5.84198 11.6411 6.35096 12.2322 7.02412 12.2979C7.15547 12.2979 7.30324 12.2979 7.48385 12.2979C8.33762 12.2979 9.65111 12.1173 10.9153 11.2471C12.3602 10.2455 12.9841 8.88278 13.214 8.16036C13.4274 7.52003 13.0662 6.81403 12.4259 6.60058L12.4423 6.617Z"
              fill={color}
            />
            <path
              d="M10.9317 20.7368C9.40477 19.6861 7.845 19.6368 7.04048 19.6861C6.36731 19.7353 5.85834 20.3264 5.90759 21.016C5.95685 21.6891 6.56434 22.1817 7.2375 22.1489C7.61513 22.116 8.60025 22.116 9.53612 22.7728C10.3899 23.3638 10.7511 24.1684 10.8989 24.5952C11.0631 25.1206 11.5556 25.449 12.0646 25.449C12.1959 25.449 12.3273 25.4326 12.4422 25.3833C13.0826 25.1699 13.4438 24.4803 13.2303 23.8236C13.0005 23.1011 12.3766 21.7384 10.9317 20.7368Z"
              fill={color}
            />
            <path
              d="M22.1125 13.1348C21.4393 13.0199 20.8154 13.4796 20.7005 14.1528C20.6513 14.4647 20.4706 16.0409 21.702 17.2559C22.3588 17.8962 23.2454 18.241 24.1648 18.241C24.6246 18.241 25.0843 18.1589 25.5276 17.9783C26.1515 17.732 26.4635 17.0096 26.2172 16.3857C25.9709 15.7618 25.2485 15.4498 24.6082 15.6961C24.1813 15.8603 23.7215 15.7946 23.426 15.4991C23.0648 15.1379 23.1305 14.5796 23.1305 14.5468C23.2454 13.8736 22.7857 13.2497 22.1125 13.1348Z"
              fill={color}
            />
            <path
              d="M9.20742 15.6961C8.58351 15.4334 7.86109 15.7454 7.59839 16.3857C7.35211 17.0096 7.64765 17.732 8.28798 17.9783C8.73128 18.1589 9.191 18.241 9.65073 18.241C10.5538 18.241 11.4404 17.8962 12.1135 17.2559C13.3449 16.0573 13.1643 14.4647 13.1151 14.1528C13.0001 13.4796 12.3762 13.0199 11.7195 13.1348C11.0463 13.2333 10.5866 13.8736 10.6851 14.5304C10.6851 14.5468 10.7672 15.1215 10.3896 15.4827C10.094 15.7782 9.61789 15.8439 9.191 15.6797L9.20742 15.6961Z"
              fill={color}
            />
          </svg>
        )}
      </TimelineTitle>
      <div className="h-full grid grid-flow-col auto-cols-max ml-[150px]">
        {children}
      </div>
      {isLastSection && (
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[250px] h-[200px] z-[2]"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
          }}
        ></div>
      )}
    </section>
  );
};

export default TimelineSection;
