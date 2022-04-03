import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Input } from "components/Input";

const ChatDashboardPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[928px] 3xl:h-[1114px] h-[1236px] lg:h-[721px] self-stretch w-[100%] xl:h-[825px]">
        <Row className="absolute items-center justify-evenly px-[0] self-stretch top-[0] w-[100%]">
          <aside className="bg-white_A700 items-center justify-end shadow-bs w-[15%]">
            <Column className="">
              <Column className="2xl:mb-[30px] 2xl:mr-[36px] 2xl:mt-[65px] 3xl:mb-[36px] 3xl:mr-[43px] 3xl:mt-[78px] justify-start lg:mb-[23px] lg:mr-[28px] lg:mt-[50px] mb-[40px] mr-[48px] mt-[87px] w-[83%] xl:mb-[26px] xl:mr-[32px] xl:mt-[58px]">
                <Column className="items-end self-stretch w-[100%]">
                  <Column className="2xl:mx-[36px] 3xl:mx-[44px] border-bw5 border-solid border-white_A700 items-center justify-start lg:mx-[28px] mx-[49px] rounded-radius50 w-[40%] xl:mx-[32px]">
                    <Image
                      src="img_34.png"
                      className="2xl:h-[65px] 2xl:my-[3px] 3xl:h-[78px] 3xl:my-[4px] h-[86px] lg:h-[51px] lg:my-[2px] mx-[auto] my-[5px] object-contain rounded-radius50 w-[90%] xl:h-[58px] xl:my-[3px]"
                      alt="34"
                    />
                  </Column>
                </Column>
                <Column className="2xl:mt-[7px] 3xl:mt-[9px] items-center lg:mt-[5px] mt-[10px] self-stretch w-[100%] xl:mt-[6px]">
                  <Row className="font-ttnorms justify-end self-stretch w-[100%]">
                    <Text className="2xl:ml-[35px] 2xl:text-fs13 3xl:ml-[42px] 3xl:text-fs16 font-medium lg:ml-[27px] lg:text-fs10 mb-[1px] ml-[47px] text-center text-fs18 text-gray_900 xl:ml-[31px] xl:text-fs12">{`Henry Jabbawockiez`}</Text>
                    <Image
                      src="img_feathericon.svg"
                      className="2xl:h-[15px] 2xl:ml-[4px] 2xl:mt-[2px] 2xl:w-[14px] 3xl:h-[18px] 3xl:ml-[5px] 3xl:mt-[2px] 3xl:w-[17px] h-[19px] lg:h-[12px] lg:ml-[3px] lg:mt-[1px] lg:w-[11px] ml-[6px] mt-[3px] object-contain w-[19px] xl:h-[13px] xl:ml-[4px] xl:mt-[2px] xl:w-[12px]"
                      alt="feathericon"
                    />
                  </Row>
                </Column>
                <Row className="2xl:mr-[7px] 2xl:mt-[56px] 3xl:mr-[9px] 3xl:mt-[67px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[43px] mr-[10px] mt-[75px] w-[54%] xl:mr-[6px] xl:mt-[50px]">
                  <Image
                    src="img_iconoutlinegr.svg"
                    className="2xl:h-[19px] 2xl:ml-[28px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[34px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[22px] lg:my-[4px] lg:w-[14px] ml-[38px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:ml-[25px] xl:my-[5px] xl:w-[16px]"
                    alt="IconOutlinegr"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[15px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[17px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[11px] xl:mt-[6px] xl:text-fs10">{`Home`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[52%] xl:mr-[6px] xl:mt-[23px]">
                  <Line className="2xl:h-[31px] 3xl:h-[37px] bg-blue_500 h-[40px] lg:h-[24px] rounded-radius3 shadow-bs1 w-[3px] xl:h-[27px]" />
                  <Image
                    src="img_iconchat.png"
                    className="2xl:h-[19px] 2xl:ml-[26px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[31px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[20px] lg:my-[4px] lg:w-[14px] ml-[35px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:ml-[23px] xl:my-[5px] xl:w-[16px]"
                    alt="IconChat"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[13px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[16px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[10px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[18px] mt-[10px] text-blue_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[12px] xl:mt-[6px] xl:text-fs10">{`Chat`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[67%] xl:mr-[6px] xl:mt-[23px]">
                  <Image
                    src="img_iconoutlinepe.svg"
                    className="2xl:h-[19px] 2xl:ml-[28px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[34px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[22px] lg:my-[4px] lg:w-[14px] ml-[38px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:ml-[25px] xl:my-[5px] xl:w-[16px]"
                    alt="IconOutlinepe"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[15px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[17px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[11px] xl:mt-[6px] xl:text-fs10">{`Contact`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[87%] xl:mr-[6px] xl:mt-[23px]">
                  <Image
                    src="img_iconoutlinebe.svg"
                    className="2xl:h-[19px] 2xl:mb-[6px] 2xl:ml-[28px] 2xl:mt-[5px] 2xl:w-[18px] 3xl:h-[22px] 3xl:mb-[8px] 3xl:ml-[34px] 3xl:mt-[6px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:mb-[5px] lg:ml-[22px] lg:mt-[4px] lg:w-[14px] mb-[9px] ml-[38px] mt-[7px] object-contain w-[24px] xl:h-[17px] xl:mb-[6px] xl:ml-[25px] xl:mt-[4px] xl:w-[16px]"
                    alt="IconOutlinebe"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[14px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[16px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[10px] xl:mt-[6px] xl:text-fs10">{`Notifications`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[71%] xl:mr-[6px] xl:mt-[23px]">
                  <Image
                    src="img_iconoutlineca.svg"
                    className="2xl:h-[19px] 2xl:mb-[6px] 2xl:ml-[28px] 2xl:mt-[5px] 2xl:w-[18px] 3xl:h-[22px] 3xl:mb-[8px] 3xl:ml-[34px] 3xl:mt-[6px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:mb-[5px] lg:ml-[22px] lg:mt-[4px] lg:w-[14px] mb-[9px] ml-[38px] mt-[7px] object-contain w-[24px] xl:h-[17px] xl:mb-[6px] xl:ml-[25px] xl:mt-[4px] xl:w-[16px]"
                    alt="IconOutlineca"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[15px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[17px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[11px] xl:mt-[6px] xl:text-fs10">{`Calendar`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[66%] xl:mr-[6px] xl:mt-[23px]">
                  <Image
                    src="img_iconoutlinese.svg"
                    className="2xl:h-[19px] 2xl:ml-[28px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[34px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[22px] lg:my-[4px] lg:w-[14px] ml-[38px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:ml-[25px] xl:my-[5px] xl:w-[16px]"
                    alt="IconOutlinese"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[15px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[17px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[11px] xl:mt-[6px] xl:text-fs10">{`Settings`}</Text>
                </Row>
                <Row className="2xl:mr-[7px] 2xl:mt-[221px] 3xl:mr-[9px] 3xl:mt-[265px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[172px] mr-[10px] mt-[295px] w-[64%] xl:mr-[6px] xl:mt-[196px]">
                  <Image
                    src="img_iconoutlinepo.svg"
                    className="2xl:h-[19px] 2xl:ml-[28px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[34px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[22px] lg:my-[4px] lg:w-[14px] ml-[38px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:ml-[25px] xl:my-[5px] xl:w-[16px]"
                    alt="IconOutlinepo"
                  />
                  <Text className="2xl:mb-[8px] 2xl:ml-[12px] 2xl:mt-[7px] 2xl:text-fs12 3xl:ml-[14px] 3xl:my-[9px] 3xl:text-fs14 font-bold lg:mb-[6px] lg:ml-[9px] lg:mt-[5px] lg:text-fs9 mb-[11px] ml-[16px] mt-[10px] text-bluegray_500 text-center text-fs16 uppercase xl:mb-[7px] xl:ml-[10px] xl:mt-[6px] xl:text-fs10">{`Log out`}</Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Stack className="2xl:h-[811px] 3xl:h-[973px] bg-gradient  h-[1080px] lg:h-[630px] w-[85%] xl:h-[721px]">
            <Stack className="2xl:bottom-[30px] 2xl:h-[698px] 2xl:right-[45px] 3xl:bottom-[36px] 3xl:h-[838px] 3xl:right-[54px] absolute bottom-[40px] h-[930px] lg:bottom-[23px] lg:h-[543px] lg:right-[35px] right-[60px] w-[52%] xl:bottom-[26px] xl:h-[621px] xl:right-[40px]">
              <Image
                src="img_backgr.svg"
                className="2xl:h-[698px] 3xl:h-[838px] absolute h-[930px] inset-[0] lg:h-[543px] object-cover self-stretch w-[100%] xl:h-[621px]"
                alt="Backgr"
              />
              <Column className="absolute font-ttnorms items-center justify-start self-stretch top-[0] w-[100%]">
                <Row className="bg-gray_51 items-center justify-end rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] self-stretch w-[100%]">
                  <Column className="2xl:ml-[45px] 2xl:my-[21px] 3xl:ml-[54px] 3xl:my-[25px] items-center justify-start lg:ml-[35px] lg:my-[16px] ml-[60px] my-[28px] shadow-bs2 w-[6%] xl:ml-[40px] xl:my-[18px]">
                    <Image
                      src="img_24.png"
                      className="2xl:h-[41px] 3xl:h-[49px] h-[54px] lg:h-[32px] object-cover rounded-radius50 self-stretch w-[100%] xl:h-[37px]"
                      alt="24"
                    />
                  </Column>
                  <Column className="2xl:mb-[24px] 2xl:ml-[15px] 2xl:mt-[23px] 3xl:mb-[29px] 3xl:ml-[18px] 3xl:mt-[27px] justify-start lg:mb-[19px] lg:ml-[11px] lg:mt-[18px] mb-[33px] ml-[20px] mt-[31px] w-[19%] xl:mb-[22px] xl:ml-[13px] xl:mt-[20px]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 capitalize font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_900 xl:mr-[6px] xl:text-fs12">{`Nika Jerrardo`}</Text>
                    <Column className="2xl:mt-[4px] 3xl:mt-[5px] font-ttnorms items-center lg:mt-[3px] mt-[6px] self-stretch w-[100%] xl:mt-[4px]">
                      <Text className="2xl:text-fs12 3xl:text-fs14 font-medium lg:text-fs9 lowercase mx-[auto] self-stretch text-blue_500 text-center text-fs16 xl:text-fs10">{`last online 5 hours ago`}</Text>
                    </Column>
                  </Column>
                  <Image
                    src="img_iconfile.svg"
                    className="2xl:h-[40px] 2xl:ml-[294px] 2xl:my-[21px] 2xl:w-[39px] 3xl:h-[47px] 3xl:ml-[353px] 3xl:my-[26px] 3xl:w-[46px] h-[52px] lg:h-[31px] lg:ml-[228px] lg:my-[16px] lg:w-[30px] ml-[392px] my-[29px] object-contain w-[52px] xl:h-[35px] xl:ml-[261px] xl:my-[19px] xl:w-[34px]"
                    alt="IconFile"
                  />
                  <Image
                    src="img_iconmore.svg"
                    className="2xl:h-[40px] 2xl:ml-[15px] 2xl:mr-[28px] 2xl:my-[21px] 2xl:w-[39px] 3xl:h-[47px] 3xl:ml-[18px] 3xl:mr-[34px] 3xl:my-[26px] 3xl:w-[46px] h-[52px] lg:h-[31px] lg:ml-[11px] lg:mr-[22px] lg:my-[16px] lg:w-[30px] ml-[20px] mr-[38px] my-[29px] object-contain w-[52px] xl:h-[35px] xl:ml-[13px] xl:mr-[25px] xl:my-[19px] xl:w-[34px]"
                    alt="IconMore"
                  />
                </Row>
                <Line className="bg-bluegray_500_19 h-[2px] self-stretch w-[100%]" />
              </Column>
            </Stack>
            <Column className="2xl:bottom-[52px] 2xl:right-[57px] 3xl:bottom-[63px] 3xl:right-[69px] absolute bottom-[70px] justify-start lg:bottom-[40px] lg:right-[44px] right-[77px] w-[47%] xl:bottom-[46px] xl:right-[51px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-ttnorms justify-start self-stretch w-[100%]">
                  <Image
                    src="img_userphoto.png"
                    className="2xl:h-[28px] 2xl:mb-[35px] 3xl:h-[33px] 3xl:mb-[42px] h-[36px] lg:h-[21px] lg:mb-[27px] mb-[47px] mt-[1px] object-contain rounded-radius100 w-[5%] xl:h-[25px] xl:mb-[31px]"
                    alt="UserPhoto"
                  />
                  <Button className="2xl:ml-[18px] 2xl:pb-[22px] 2xl:pl-[16px] 2xl:pt-[14px] 2xl:text-fs12 3xl:ml-[21px] 3xl:pb-[27px] 3xl:pl-[19px] 3xl:pt-[17px] 3xl:text-fs14 bg-gradient1  bg-transparent border-bw font-medium lg:ml-[14px] lg:pb-[17px] lg:pl-[12px] lg:pt-[11px] lg:text-fs9 lowercase ml-[24px] pb-[30px] pl-[22px] pt-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] shadow-bs3 text-fs16 text-left text-white_A700 w-[67%] xl:ml-[16px] xl:pb-[20px] xl:pl-[14px] xl:pt-[12px] xl:text-fs10">{`Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.`}</Button>
                  <Image
                    src="img_iconoutlinemo.svg"
                    className="2xl:h-[19px] 2xl:mb-[22px] 2xl:ml-[13px] 2xl:mt-[23px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[16px] 3xl:my-[27px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:mb-[17px] lg:ml-[10px] lg:mt-[18px] lg:w-[14px] mb-[30px] ml-[18px] mt-[31px] object-contain w-[24px] xl:h-[17px] xl:ml-[12px] xl:my-[20px] xl:w-[16px]"
                    alt="IconOutlinemo"
                  />
                  <div className="2xl:h-[60px] 2xl:mb-[4px] 2xl:ml-[108px] 3xl:h-[72px] 3xl:mb-[5px] 3xl:ml-[130px] bg-bluegray_200 h-[79px] lg:h-[47px] lg:mb-[3px] lg:ml-[84px] mb-[6px] ml-[145px] rounded-radius10 shadow-bs4 w-[1%] xl:h-[53px] xl:mb-[4px] xl:ml-[96px]"></div>
                </Row>
                <Column className="2xl:mt-[11px] 3xl:mt-[13px] font-ttnorms justify-start lg:mt-[8px] mt-[15px] self-stretch w-[100%] xl:mt-[10px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ttnorms items-center justify-start self-stretch w-[100%]">
                      <Button className="2xl:ml-[45px] 2xl:pb-[16px] 2xl:pl-[16px] 2xl:pt-[14px] 2xl:text-fs12 3xl:ml-[54px] 3xl:pb-[19px] 3xl:pl-[19px] 3xl:pt-[17px] 3xl:text-fs14 bg-gradient2  bg-transparent border-bw font-medium lg:ml-[35px] lg:pb-[12px] lg:pl-[12px] lg:pt-[11px] lg:text-fs9 ml-[60px] pb-[22px] pl-[22px] pt-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] shadow-bs3 text-fs16 text-left text-white_A700 uppercase w-[25%] xl:ml-[40px] xl:pb-[14px] xl:pl-[14px] xl:pt-[12px] xl:text-fs10">{`Can I send you files?`}</Button>
                      <Image
                        src="img_iconoutlinemo_1.svg"
                        className="2xl:h-[19px] 2xl:ml-[12px] 2xl:mr-[360px] 2xl:my-[9px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[15px] 3xl:mr-[432px] 3xl:my-[11px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[9px] lg:mr-[280px] lg:my-[7px] lg:w-[14px] ml-[17px] mr-[480px] my-[13px] object-contain w-[24px] xl:h-[17px] xl:ml-[11px] xl:mr-[320px] xl:my-[8px] xl:w-[16px]"
                        alt="IconOutlinemo"
                      />
                    </Row>
                  </Column>
                  <Text className="2xl:mt-[3px] 2xl:mx-[138px] 2xl:text-fs10 3xl:mt-[4px] 3xl:mx-[165px] 3xl:text-fs12 font-medium lg:mt-[2px] lg:mx-[107px] lg:text-fs8 mt-[5px] mx-[184px] text-bluegray_500_b2 text-fs14 text-left uppercase xl:mt-[3px] xl:mx-[122px] xl:text-fs9">
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`4`}</>
                    </span>
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{` `}</>
                    </span>
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`days ago`}</>
                    </span>
                  </Text>
                </Column>
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] justify-start lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ttnorms items-center justify-center self-stretch w-[100%]">
                      <Image
                        src="img_iconoutlinemo_2.svg"
                        className="2xl:h-[19px] 2xl:ml-[351px] 2xl:my-[9px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[421px] 3xl:my-[11px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[273px] lg:my-[7px] lg:w-[14px] ml-[468px] my-[13px] object-contain w-[24px] xl:h-[17px] xl:ml-[312px] xl:my-[8px] xl:w-[16px]"
                        alt="IconOutlinemo"
                      />
                      <Stack className="2xl:h-[38px] 2xl:ml-[10px] 3xl:h-[46px] 3xl:ml-[12px] h-[50px] lg:h-[30px] lg:ml-[8px] ml-[14px] w-[25%] xl:h-[34px] xl:ml-[9px]">
                        <Image
                          src="img_block.svg"
                          className="2xl:h-[38px] 3xl:h-[46px] absolute h-[50px] inset-[0] lg:h-[30px] object-cover self-stretch w-[100%] xl:h-[34px]"
                          alt="Block"
                        />
                        <Text className="2xl:text-fs12 2xl:top-[10px] 3xl:text-fs14 3xl:top-[12px] absolute font-medium inset-x-[0] lg:text-fs9 lg:top-[8px] lowercase mx-[auto] text-bluegray_500 text-fs16 text-left top-[14px] w-[max-content] xl:text-fs10 xl:top-[9px]">
                          <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                            <>{`H`}</>
                          </span>
                          <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                            <>{`ey! `}</>
                          </span>
                          <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                            <>{`O`}</>
                          </span>
                          <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                            <>{`kay, send out.`}</>
                          </span>
                        </Text>
                      </Stack>
                      <Image
                        src="img_iconoutlineal.svg"
                        className="2xl:h-[13px] 2xl:ml-[9px] 2xl:mr-[32px] 2xl:my-[12px] 2xl:w-[12px] 3xl:h-[15px] 3xl:ml-[11px] 3xl:mr-[38px] 3xl:my-[15px] 3xl:w-[14px] h-[16px] lg:h-[10px] lg:ml-[7px] lg:mr-[25px] lg:my-[9px] lg:w-[9px] ml-[13px] mr-[43px] my-[17px] object-contain w-[16px] xl:h-[11px] xl:ml-[8px] xl:mr-[28px] xl:my-[11px] xl:w-[10px]"
                        alt="IconOutlineal"
                      />
                    </Row>
                  </Column>
                  <Column className="2xl:mt-[3px] 3xl:mt-[4px] font-ttnorms items-end lg:mt-[2px] mt-[5px] self-stretch w-[100%] xl:mt-[3px]">
                    <Text className="2xl:mx-[72px] 2xl:text-fs10 3xl:mx-[87px] 3xl:text-fs12 font-medium lg:mx-[56px] lg:text-fs8 mx-[97px] text-bluegray_500_b2 text-fs14 text-left uppercase xl:mx-[64px] xl:text-fs9">
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{`4`}</>
                      </span>
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{` `}</>
                      </span>
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{`days ago`}</>
                      </span>
                    </Text>
                  </Column>
                </Column>
                <Column className="2xl:mt-[4px] 3xl:mt-[5px] font-ttnorms justify-start lg:mt-[3px] mt-[6px] self-stretch w-[100%] xl:mt-[4px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="justify-start self-stretch w-[100%]">
                      <Image
                        src="img_userphoto.png"
                        className="2xl:h-[28px] 2xl:mb-[39px] 3xl:h-[33px] 3xl:mb-[46px] h-[36px] lg:h-[21px] lg:mb-[30px] mb-[52px] mt-[1px] object-contain rounded-radius100 w-[5%] xl:h-[25px] xl:mb-[34px]"
                        alt="UserPhoto"
                      />
                      <Row className="2xl:ml-[18px] 3xl:ml-[21px] bg-gradient3  items-center justify-center lg:ml-[14px] ml-[24px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] shadow-bs3 w-[23%] xl:ml-[16px]">
                        <Image
                          src="img_fileicon.svg"
                          className="2xl:h-[31px] 2xl:ml-[18px] 2xl:my-[18px] 2xl:w-[30px] 3xl:h-[37px] 3xl:ml-[22px] 3xl:my-[22px] 3xl:w-[36px] h-[40px] lg:h-[24px] lg:ml-[14px] lg:my-[14px] lg:w-[23px] ml-[25px] my-[25px] object-contain w-[40px] xl:h-[27px] xl:ml-[16px] xl:my-[16px] xl:w-[26px]"
                          alt="Fileicon"
                        />
                        <Column className="2xl:mb-[12px] 2xl:ml-[15px] 2xl:mr-[12px] 2xl:mt-[14px] 3xl:mb-[15px] 3xl:ml-[18px] 3xl:mr-[14px] 3xl:mt-[17px] font-ttnorms justify-start lg:mb-[9px] lg:ml-[11px] lg:mr-[9px] lg:mt-[11px] mb-[17px] ml-[20px] mr-[16px] mt-[19px] w-[44%] xl:mb-[11px] xl:ml-[13px] xl:mr-[10px] xl:mt-[12px]">
                          <Text className="2xl:mr-[7px] 2xl:text-fs12 3xl:mr-[9px] 3xl:text-fs14 font-medium lg:mr-[5px] lg:text-fs9 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[6px] xl:text-fs10">
                            <span className="text-white_A700 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`S`}</>
                            </span>
                            <span className="text-white_A700 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`tyle.zip`}</>
                            </span>
                          </Text>
                          <Text className="2xl:text-fs10 3xl:text-fs12 font-medium lg:text-fs8 lowercase self-stretch text-fs14 text-left text-white_A700_b2 xl:text-fs9">
                            <span className="text-white_A700_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                              <>{`41.36 `}</>
                            </span>
                            <span className="text-white_A700_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                              <>{`M`}</>
                            </span>
                            <span className="text-white_A700_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                              <>{`b`}</>
                            </span>
                          </Text>
                        </Column>
                      </Row>
                      <Image
                        src="img_iconoutlinemo_3.svg"
                        className="2xl:h-[19px] 2xl:mb-[26px] 2xl:ml-[13px] 2xl:mr-[368px] 2xl:mt-[23px] 2xl:w-[18px] 3xl:h-[22px] 3xl:mb-[31px] 3xl:ml-[16px] 3xl:mr-[442px] 3xl:mt-[27px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:mb-[20px] lg:ml-[10px] lg:mr-[286px] lg:mt-[18px] lg:w-[14px] mb-[35px] ml-[18px] mr-[491px] mt-[31px] object-contain w-[24px] xl:h-[17px] xl:mb-[23px] xl:ml-[12px] xl:mr-[327px] xl:mt-[20px] xl:w-[16px]"
                        alt="IconOutlinemo"
                      />
                    </Row>
                  </Column>
                  <Text className="2xl:mt-[3px] 2xl:mx-[129px] 2xl:text-fs10 3xl:mt-[4px] 3xl:mx-[154px] 3xl:text-fs12 font-medium lg:mt-[2px] lg:mx-[100px] lg:text-fs8 mt-[5px] mx-[172px] text-bluegray_500_b2 text-fs14 text-left uppercase xl:mt-[3px] xl:mx-[114px] xl:text-fs9">
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`4`}</>
                    </span>
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{` `}</>
                    </span>
                    <span className="text-bluegray_500_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`days ago`}</>
                    </span>
                  </Text>
                </Column>
              </Column>
              <Row className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[15px] font-ttnorms justify-start lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[17px] w-[94%] xl:mr-[6px] xl:mt-[11px]">
                <Line className="2xl:mb-[5px] 2xl:mt-[6px] 3xl:mb-[6px] 3xl:mt-[7px] bg-bluegray_500_27 h-[1px] lg:my-[4px] mb-[7px] mt-[8px] rounded-radius2 w-[44%] xl:mb-[4px] xl:mt-[5px]" />
                <Text className="2xl:ml-[16px] 2xl:text-fs10 3xl:ml-[19px] 3xl:text-fs12 font-medium lg:ml-[12px] lg:text-fs8 ml-[22px] text-bluegray_500_b2 text-fs14 text-left uppercase xl:ml-[14px] xl:text-fs9">
                  <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                    <>{`3 `}</>
                  </span>
                  <span className="text-bluegray_500_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                    <>{`days ago`}</>
                  </span>
                </Text>
                <Line className="2xl:mb-[5px] 2xl:ml-[15px] 2xl:mt-[6px] 3xl:mb-[6px] 3xl:ml-[18px] 3xl:mt-[7px] bg-bluegray_500_27 h-[1px] lg:ml-[11px] lg:my-[4px] mb-[7px] ml-[20px] mt-[8px] rounded-radius2 w-[41%] xl:mb-[4px] xl:ml-[13px] xl:mt-[5px]" />
              </Row>
              <Column className="2xl:mt-[17px] 3xl:mt-[20px] items-center lg:mt-[13px] mt-[23px] self-stretch w-[100%] xl:mt-[15px]">
                <Column className="justify-start self-stretch w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="items-center justify-center self-stretch w-[100%]">
                      <Image
                        src="img_iconoutlinemo_4.svg"
                        className="2xl:h-[19px] 2xl:ml-[180px] 2xl:my-[28px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[217px] 3xl:my-[34px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[140px] lg:my-[22px] lg:w-[14px] ml-[241px] my-[38px] object-contain w-[24px] xl:h-[17px] xl:ml-[160px] xl:my-[25px] xl:w-[16px]"
                        alt="IconOutlinemo"
                      />
                      <Stack className="2xl:h-[76px] 2xl:ml-[15px] 3xl:h-[91px] 3xl:ml-[18px] h-[100px] lg:h-[59px] lg:ml-[11px] ml-[20px] w-[54%] xl:h-[67px] xl:ml-[13px]">
                        <Image
                          src="img_block_1.svg"
                          className="2xl:h-[76px] 3xl:h-[91px] absolute h-[100px] inset-[0] lg:h-[59px] object-cover self-stretch w-[100%] xl:h-[67px]"
                          alt="Block"
                        />
                        <Column className="2xl:top-[8px] 3xl:top-[9px] absolute font-ttnorms inset-x-[0] justify-start lg:top-[6px] mx-[auto] top-[11px] w-[92%] xl:top-[7px]">
                          <Text className="2xl:leading-lh19 2xl:text-fs12 3xl:leading-lh23 3xl:text-fs14 capitalize font-medium leading-lh2600 lg:leading-lh15 lg:text-fs9 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:leading-lh17 xl:text-fs10">
                            <span className="text-bluegray_500 text-fs16 font-ttnorms capitalize text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`Hello! I `}</>
                            </span>
                            <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`tweaked everything you as`}</>
                            </span>
                            <span className="text-bluegray_500 text-fs16 font-ttnorms capitalize text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`ked. I `}</>
                            </span>
                            <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`am sending the finished f`}</>
                            </span>
                            <span className="text-bluegray_500 text-fs16 font-ttnorms capitalize text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                              <>{`ile.`}</>
                            </span>
                          </Text>
                          <Column className="items-end self-stretch w-[100%]">
                            <Row className="2xl:mx-[9px] 3xl:mx-[11px] font-ttnorms items-center justify-end lg:mx-[7px] mx-[13px] w-[59%] xl:mx-[8px]">
                              <Text className="2xl:my-[4px] 2xl:text-fs12 3xl:my-[5px] 3xl:text-fs14 font-medium lg:my-[3px] lg:text-fs9 my-[6px] text-blue_500 text-fs16 text-right uppercase xl:my-[4px] xl:text-fs10">
                                <span className="text-blue_500 text-fs16 font-ttnorms lowercase text-right font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                                  <>{`(52.05 `}</>
                                </span>
                                <span className="text-blue_500 text-fs16 font-ttnorms uppercase text-right font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                                  <>{`M`}</>
                                </span>
                                <span className="text-blue_500 text-fs16 font-ttnorms lowercase text-right font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                                  <>{`b)`}</>
                                </span>
                                <span className="text-blue_500 text-fs16 font-ttnorms uppercase text-right font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                                  <>{` New_S`}</>
                                </span>
                                <span className="text-blue_500 text-fs16 font-ttnorms lowercase text-right font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                                  <>{`tyle.zip `}</>
                                </span>
                              </Text>
                              <Image
                                src="img_iconoutlinefi.svg"
                                className="2xl:h-[19px] 2xl:ml-[4px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[5px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[3px] lg:w-[14px] ml-[6px] object-contain w-[24px] xl:h-[17px] xl:ml-[4px] xl:w-[16px]"
                                alt="IconOutlinefi"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Stack>
                      <Image
                        src="img_iconoutlinech.svg"
                        className="2xl:h-[13px] 2xl:ml-[9px] 2xl:mr-[32px] 2xl:my-[31px] 2xl:w-[12px] 3xl:h-[15px] 3xl:ml-[11px] 3xl:mr-[38px] 3xl:my-[37px] 3xl:w-[14px] h-[16px] lg:h-[10px] lg:ml-[7px] lg:mr-[25px] lg:my-[24px] lg:w-[9px] ml-[13px] mr-[43px] my-[42px] object-contain w-[16px] xl:h-[11px] xl:ml-[8px] xl:mr-[28px] xl:my-[28px] xl:w-[10px]"
                        alt="IconOutlinech"
                      />
                    </Row>
                  </Column>
                  <Column className="2xl:mt-[3px] 3xl:mt-[4px] font-ttnorms items-end lg:mt-[2px] mt-[5px] self-stretch w-[100%] xl:mt-[3px]">
                    <Text className="2xl:mx-[53px] 2xl:text-fs10 3xl:mx-[63px] 3xl:text-fs12 font-medium lg:mx-[41px] lg:text-fs8 mx-[71px] text-bluegray_500_b2 text-fs14 text-left uppercase xl:mx-[47px] xl:text-fs9">
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{`3`}</>
                      </span>
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{` `}</>
                      </span>
                      <span className="text-bluegray_500_b2 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                        <>{`days ago`}</>
                      </span>
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="2xl:h-[146px] 2xl:mr-[7px] 3xl:h-[175px] 3xl:mr-[9px] font-ttnorms h-[194px] lg:h-[114px] lg:mr-[5px] mr-[10px] mt-[1px] w-[94%] xl:h-[130px] xl:mr-[6px]">
                <Stack className="2xl:h-[146px] 3xl:h-[175px] absolute h-[194px] inset-[0] lg:h-[114px] self-stretch w-[100%] xl:h-[130px]">
                  <Stack className="2xl:h-[146px] 3xl:h-[175px] absolute h-[194px] inset-[0] lg:h-[114px] self-stretch w-[100%] xl:h-[130px]">
                    <Line className="2xl:bottom-[44px] 3xl:bottom-[53px] absolute bg-bluegray_500_27 bottom-[59px] h-[2px] inset-x-[0] lg:bottom-[34px] mx-[auto] rounded-radius2 w-[99%] xl:bottom-[39px]" />
                    <Image
                      src="img_addicons.png"
                      className="2xl:h-[146px] 3xl:h-[175px] absolute h-[194px] left-[0] lg:h-[114px] object-contain w-[5%] xl:h-[130px]"
                      alt="AddIcons"
                    />
                  </Stack>
                  <Row className="absolute bottom-[0] items-center justify-between px-[0] right-[0] w-[13%]">
                    <Image
                      src="img_smileicon.svg"
                      className="2xl:h-[19px] 2xl:my-[6px] 2xl:w-[18px] 3xl:h-[22px] 3xl:my-[7px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:my-[4px] lg:w-[14px] my-[8px] object-contain w-[24px] xl:h-[17px] xl:my-[5px] xl:w-[16px]"
                      alt="Smileicon"
                    />
                    <Image
                      src="img_sendicon.png"
                      className="2xl:h-[31px] 2xl:w-[30px] 3xl:h-[37px] 3xl:w-[36px] h-[40px] lg:h-[24px] lg:w-[23px] object-contain w-[40px] xl:h-[27px] xl:w-[26px]"
                      alt="SendIcon"
                    />
                  </Row>
                </Stack>
                <Text className="2xl:bottom-[6px] 2xl:left-[45px] 2xl:text-fs15 3xl:bottom-[7px] 3xl:left-[54px] 3xl:text-fs18 absolute bottom-[8px] capitalize font-medium left-[61px] lg:bottom-[4px] lg:left-[35px] lg:text-fs11 text-bluegray_500_7f text-center text-fs20 xl:bottom-[5px] xl:left-[40px] xl:text-fs13">
                  <span className="text-bluegray_500_7f text-fs20 font-ttnorms capitalize text-center font-medium lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18">
                    <>{`Type `}</>
                  </span>
                  <span className="text-bluegray_500_7f text-fs20 font-ttnorms lowercase text-center font-medium lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18">
                    <>{`a message her`}</>
                  </span>
                  <span className="text-bluegray_500_7f text-fs20 font-ttnorms capitalize text-center font-medium lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18">
                    <>{`e`}</>
                  </span>
                </Text>
              </Stack>
            </Column>
          </Stack>
        </Row>
        <Column className="2xl:left-[261px] 3xl:left-[314px] absolute bottom-[0] items-center justify-start left-[349px] lg:left-[203px] w-[31%] xl:left-[232px]">
          <Row className="justify-between px-[0] self-stretch w-[100%]">
            <Column className="font-ttnorms justify-start w-[23%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 capitalize font-medium lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_900 text-left tracking-ls1 xl:mr-[6px] xl:text-fs24">{`Chats`}</Text>
              <Column className="2xl:mt-[11px] 3xl:mt-[13px] items-center lg:mt-[8px] mt-[15px] self-stretch w-[100%] xl:mt-[10px]">
                <Row className="font-ttnorms items-end justify-between ml-[1px] px-[0] w-[99%]">
                  <Text className="2xl:text-fs13 3xl:text-fs16 capitalize font-medium lg:text-fs10 text-bluegray_500 text-fs18 text-left xl:text-fs12">{`Recent Chats`}</Text>
                  <Image
                    src="img_feathericon_1.svg"
                    className="2xl:h-[13px] 2xl:mt-[6px] 2xl:w-[12px] 3xl:h-[15px] 3xl:mt-[7px] 3xl:w-[14px] h-[16px] lg:h-[10px] lg:mt-[4px] lg:w-[9px] mb-[1px] mt-[8px] object-contain w-[16px] xl:h-[11px] xl:mt-[5px] xl:w-[10px]"
                    alt="feathericon"
                  />
                </Row>
              </Column>
            </Column>
            <Row className="2xl:mb-[4px] 2xl:mr-[12px] 3xl:mb-[5px] 3xl:mr-[14px] bg-gradient4  font-ttnorms items-center justify-center lg:mb-[3px] lg:mr-[9px] mb-[6px] mr-[16px] mt-[1px] rounded-radius6 shadow-bs5 w-[40%] xl:mb-[4px] xl:mr-[10px]">
              <Image
                src="img_iconoutlinepl.svg"
                className="2xl:h-[19px] 2xl:ml-[18px] 2xl:my-[13px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[22px] 3xl:my-[16px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[14px] lg:my-[10px] lg:w-[14px] ml-[25px] my-[18px] object-contain w-[24px] xl:h-[17px] xl:ml-[16px] xl:my-[12px] xl:w-[16px]"
                alt="IconOutlinepl"
              />
              <Text className="2xl:ml-[5px] 2xl:mr-[18px] 2xl:my-[13px] 2xl:text-fs15 3xl:ml-[6px] 3xl:mr-[22px] 3xl:my-[16px] 3xl:text-fs18 capitalize font-medium lg:ml-[4px] lg:mr-[14px] lg:my-[10px] lg:text-fs11 ml-[7px] mr-[25px] my-[18px] text-center text-fs20 text-white_A700 xl:ml-[4px] xl:mr-[16px] xl:my-[12px] xl:text-fs13">{`Create new Chat`}</Text>
            </Row>
          </Row>
          <Stack className="2xl:h-[53px] 2xl:mr-[12px] 2xl:mt-[18px] 3xl:h-[64px] 3xl:mr-[14px] 3xl:mt-[21px] h-[70px] lg:h-[41px] lg:mr-[9px] lg:mt-[14px] ml-[1px] mr-[16px] mt-[24px] w-[97%] xl:h-[47px] xl:mr-[10px] xl:mt-[16px]">
            <div className="2xl:h-[38px] 3xl:h-[46px] absolute bg-gray_300 h-[50px] inset-[0] justify-center lg:h-[30px] m-[auto] rounded-radius6 shadow-bs6 w-[93%] xl:h-[34px]"></div>
            <Row className="absolute bg-white_A700 font-ttnorms inset-[0] items-center justify-end rounded-radius6 self-stretch w-[100%]">
              <Image
                src="img_iconoutlinese_1.svg"
                className="2xl:h-[19px] 2xl:ml-[30px] 2xl:my-[17px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[36px] 3xl:my-[20px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[23px] lg:my-[13px] lg:w-[14px] ml-[41px] my-[23px] object-contain w-[24px] xl:h-[17px] xl:ml-[27px] xl:my-[15px] xl:w-[16px]"
                alt="IconOutlinese"
              />
              <Text className="2xl:ml-[7px] 2xl:my-[16px] 2xl:text-fs13 3xl:ml-[9px] 3xl:my-[19px] 3xl:text-fs16 capitalize font-medium lg:ml-[5px] lg:my-[12px] lg:text-fs10 ml-[10px] my-[22px] text-bluegray_500 text-fs18 text-left xl:ml-[6px] xl:my-[14px] xl:text-fs12">{`Search`}</Text>
              <Line className="2xl:h-[53px] 2xl:ml-[200px] 3xl:h-[64px] 3xl:ml-[240px] bg-gray_101 h-[70px] lg:h-[41px] lg:ml-[155px] ml-[267px] w-[2px] xl:h-[47px] xl:ml-[178px]" />
              <Text className="2xl:ml-[27px] 2xl:my-[16px] 2xl:text-fs13 3xl:ml-[32px] 3xl:my-[19px] 3xl:text-fs16 capitalize font-medium lg:ml-[21px] lg:my-[12px] lg:text-fs10 ml-[36px] my-[22px] text-bluegray_500 text-fs18 text-left xl:ml-[24px] xl:my-[14px] xl:text-fs12">{`Messages`}</Text>
              <Image
                src="img_feathericon_1.svg"
                className="2xl:h-[13px] 2xl:mb-[18px] 2xl:ml-[4px] 2xl:mr-[30px] 2xl:mt-[22px] 2xl:w-[12px] 3xl:h-[15px] 3xl:mb-[21px] 3xl:ml-[5px] 3xl:mr-[36px] 3xl:mt-[27px] 3xl:w-[14px] h-[16px] lg:h-[10px] lg:mb-[14px] lg:ml-[3px] lg:mr-[23px] lg:mt-[17px] lg:w-[9px] mb-[24px] ml-[6px] mr-[40px] mt-[30px] object-contain w-[16px] xl:h-[11px] xl:mb-[16px] xl:ml-[4px] xl:mr-[26px] xl:mt-[20px] xl:w-[10px]"
                alt="feathericon"
              />
            </Row>
          </Stack>
          <Row className="2xl:mt-[15px] 3xl:mt-[18px] justify-between lg:mt-[11px] mt-[20px] px-[0] self-stretch w-[100%] xl:mt-[13px]">
            <Stack className="2xl:h-[166px] 3xl:h-[199px] h-[220px] lg:h-[129px] ml-[1px] w-[97%] xl:h-[147px]">
              <Image
                src="img_block_2.svg"
                className="2xl:h-[166px] 3xl:h-[199px] absolute h-[220px] inset-[0] lg:h-[129px] object-cover self-stretch w-[100%] xl:h-[147px]"
                alt="Block"
              />
              <Column className="2xl:top-[22px] 3xl:top-[27px] absolute inset-x-[0] items-center justify-start lg:top-[17px] mx-[auto] top-[30px] w-[86%] xl:top-[20px]">
                <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                  <Stack className="2xl:h-[41px] 2xl:w-[40px] 3xl:h-[49px] 3xl:w-[48px] h-[54px] lg:h-[32px] lg:w-[31px] shadow-bs7 w-[54px] xl:h-[37px] xl:w-[36px]">
                    <Image
                      src="img_24_1.png"
                      className="2xl:h-[41px] 3xl:h-[49px] absolute h-[54px] inset-[0] lg:h-[32px] object-cover rounded-radius50 self-stretch w-[100%] xl:h-[37px]"
                      alt="24"
                    />
                    <div className="2xl:h-[8px] 2xl:left-[2px] 2xl:top-[2px] 2xl:w-[7px] 3xl:left-[2px] 3xl:top-[2px] 3xl:w-[9px] absolute bg-green_A700 border-bw15 border-solid border-white_A700 h-[10px] left-[3px] lg:h-[6px] lg:left-[1px] lg:top-[1px] lg:w-[5px] rounded-radius50 top-[3px] w-[10px] xl:h-[7px] xl:left-[2px] xl:top-[2px] xl:w-[6px]"></div>
                  </Stack>
                  <Column className="2xl:mb-[3px] 2xl:mt-[2px] 3xl:mb-[4px] 3xl:mt-[2px] items-center justify-start lg:mb-[2px] lg:mt-[1px] mb-[5px] mt-[3px] w-[85%] xl:mb-[3px] xl:mt-[2px]">
                    <Row className="font-ttnorms justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:text-fs13 3xl:text-fs16 capitalize font-bold lg:text-fs10 text-center text-fs18 text-gray_900 xl:text-fs12">{`Luy Robin`}</Text>
                      <Text className="2xl:text-fs12 3xl:text-fs14 font-medium lg:text-fs9 lowercase mt-[1px] text-bluegray_500 text-center text-fs16 xl:text-fs10">{`1 minute ago`}</Text>
                    </Row>
                    <Row className="2xl:mt-[4px] 3xl:mt-[5px] font-ttnorms items-end justify-start lg:mt-[3px] mt-[6px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_group5.svg"
                        className="2xl:h-[4px] 2xl:mb-[3px] 2xl:mt-[7px] 3xl:mb-[3px] 3xl:mt-[9px] h-[5px] lg:h-[3px] lg:mb-[2px] lg:mt-[5px] mb-[4px] ml-[1px] mt-[10px] object-contain w-[4%] xl:h-[4px] xl:mb-[2px] xl:mt-[6px]"
                        alt="Group5"
                      />
                      <Text className="2xl:ml-[3px] 2xl:mr-[270px] 2xl:text-fs12 3xl:ml-[4px] 3xl:mr-[325px] 3xl:text-fs14 font-medium lg:ml-[2px] lg:mr-[210px] lg:text-fs9 lowercase ml-[5px] mr-[361px] text-blue_500 text-center text-fs16 xl:ml-[3px] xl:mr-[240px] xl:text-fs10">{`writes`}</Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="2xl:mt-[12px] 3xl:mt-[15px] font-ttnorms justify-between lg:mt-[9px] mt-[17px] px-[0] self-stretch w-[100%] xl:mt-[11px]">
                  <Text className="2xl:leading-lh19 2xl:text-fs12 3xl:leading-lh23 3xl:text-fs14 font-medium leading-lh2600 lg:leading-lh15 lg:text-fs9 lowercase text-bluegray_500 text-fs16 text-left w-[90%] xl:leading-lh17 xl:text-fs10">
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`M`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`ost of its text is made up from sections 1.10.32–3 of `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`C`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`icero's `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`D`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`e finibus `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`b`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`onorum et malorum (`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`O`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`n the Boundaries of `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`G`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`oods and `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`E`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`vils; finibus may also be translated as purposes). `}</>
                    </span>
                  </Text>
                  <Column className="2xl:mb-[36px] 2xl:mt-[6px] 3xl:mb-[44px] 3xl:mt-[8px] bg-pink_A200 font-ttnorms items-center justify-start lg:mb-[28px] lg:mt-[5px] mb-[49px] mr-[1px] mt-[9px] rounded-radius50 shadow-bs7 w-[4%] xl:mb-[32px] xl:mt-[6px]">
                    <Text className="2xl:my-[3px] 2xl:text-fs9 3xl:my-[4px] 3xl:text-fs11 font-medium lg:my-[2px] lg:text-fs7 lowercase mx-[auto] my-[5px] text-center text-fs13 text-white_A700 xl:my-[3px] xl:text-fs8">{`2`}</Text>
                  </Column>
                </Row>
              </Column>
            </Stack>
            <div className="2xl:h-[60px] 2xl:mb-[98px] 2xl:mt-[7px] 3xl:h-[72px] 3xl:mb-[117px] 3xl:mt-[9px] bg-bluegray_200 h-[79px] lg:h-[47px] lg:mb-[76px] lg:mt-[5px] mb-[131px] mt-[10px] rounded-radius10 shadow-bs4 w-[1%] xl:h-[53px] xl:mb-[87px] xl:mt-[6px]"></div>
          </Row>
          <Stack className="2xl:h-[166px] 2xl:mr-[12px] 2xl:mt-[15px] 3xl:h-[199px] 3xl:mr-[14px] 3xl:mt-[18px] h-[220px] lg:h-[129px] lg:mr-[9px] lg:mt-[11px] ml-[1px] mr-[16px] mt-[20px] w-[97%] xl:h-[147px] xl:mr-[10px] xl:mt-[13px]">
            <Image
              src="img_block_3.svg"
              className="2xl:h-[166px] 3xl:h-[199px] absolute h-[220px] inset-[0] lg:h-[129px] object-cover self-stretch w-[100%] xl:h-[147px]"
              alt="Block"
            />
            <Column className="2xl:top-[22px] 3xl:top-[27px] absolute inset-x-[0] justify-start lg:top-[17px] mx-[auto] top-[30px] w-[86%] xl:top-[20px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                  <Stack className="2xl:h-[41px] 2xl:w-[40px] 3xl:h-[49px] 3xl:w-[48px] h-[54px] lg:h-[32px] lg:w-[31px] shadow-bs2 w-[54px] xl:h-[37px] xl:w-[36px]">
                    <Image
                      src="img_24_2.png"
                      className="2xl:h-[41px] 3xl:h-[49px] absolute h-[54px] inset-[0] lg:h-[32px] object-cover rounded-radius50 self-stretch w-[100%] xl:h-[37px]"
                      alt="24"
                    />
                    <div className="2xl:h-[8px] 2xl:left-[2px] 2xl:top-[2px] 2xl:w-[7px] 3xl:left-[2px] 3xl:top-[2px] 3xl:w-[9px] absolute bg-green_A700 border-bw15 border-solid border-white_A700 h-[10px] left-[3px] lg:h-[6px] lg:left-[1px] lg:top-[1px] lg:w-[5px] rounded-radius50 top-[3px] w-[10px] xl:h-[7px] xl:left-[2px] xl:top-[2px] xl:w-[6px]"></div>
                  </Stack>
                  <Column className="2xl:mb-[3px] 2xl:mt-[2px] 3xl:mb-[4px] 3xl:mt-[2px] items-center justify-start lg:mb-[2px] lg:mt-[1px] mb-[5px] mt-[3px] w-[85%] xl:mb-[3px] xl:mt-[2px]">
                    <Row className="font-ttnorms justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:text-fs13 3xl:text-fs16 capitalize font-bold lg:text-fs10 text-center text-fs18 text-gray_900 xl:text-fs12">{`Jared Sunn`}</Text>
                      <Text className="2xl:text-fs12 3xl:text-fs14 font-medium lg:text-fs9 lowercase mt-[1px] text-bluegray_500 text-center text-fs16 xl:text-fs10">{`1 minute ago`}</Text>
                    </Row>
                    <Row className="2xl:mt-[4px] 3xl:mt-[5px] font-ttnorms justify-start lg:mt-[3px] mt-[6px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_recicon.svg"
                        className="2xl:h-[10px] 2xl:mt-[3px] 2xl:w-[9px] 3xl:h-[11px] 3xl:mt-[4px] 3xl:w-[10px] h-[12px] lg:h-[7px] lg:mt-[2px] lg:w-[7px] mb-[1px] ml-[1px] mt-[5px] object-contain w-[12px] xl:h-[9px] xl:mt-[3px] xl:w-[8px]"
                        alt="RecIcon"
                      />
                      <Text className="2xl:ml-[4px] 2xl:mr-[182px] 2xl:text-fs12 3xl:ml-[5px] 3xl:mr-[218px] 3xl:text-fs14 font-medium lg:ml-[3px] lg:mr-[141px] lg:text-fs9 lowercase ml-[6px] mr-[243px] text-blue_500 text-center text-fs16 xl:ml-[4px] xl:mr-[162px] xl:text-fs10">{`records voice message`}</Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="2xl:mt-[12px] 3xl:mt-[15px] font-ttnorms justify-between lg:mt-[9px] mt-[17px] px-[0] w-[100%] xl:mt-[11px]">
                  <Image
                    src="img_iconoutlinemi.svg"
                    className="2xl:h-[11px] 2xl:mb-[6px] 2xl:mt-[4px] 2xl:w-[10px] 3xl:h-[13px] 3xl:mb-[8px] 3xl:mt-[5px] 3xl:w-[12px] h-[14px] lg:h-[9px] lg:mb-[5px] lg:mt-[3px] lg:w-[8px] mb-[9px] mt-[6px] object-contain w-[14px] xl:h-[10px] xl:mb-[6px] xl:mt-[4px] xl:w-[9px]"
                    alt="IconOutlinemi"
                  />
                  <Text className="2xl:mb-[2px] 2xl:text-fs12 3xl:mb-[2px] 3xl:text-fs14 font-medium lg:mb-[1px] lg:text-fs9 mb-[3px] text-bluegray_500 text-fs16 text-left uppercase xl:mb-[2px] xl:text-fs10">
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`V`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`oice message `}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{`(01:15)`}</>
                    </span>
                    <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                      <>{` `}</>
                    </span>
                  </Text>
                  <Column className="2xl:mt-[6px] 3xl:mt-[8px] bg-pink_A200 font-ttnorms items-center justify-start lg:mt-[5px] mt-[9px] rounded-radius50 shadow-bs7 w-[4%] xl:mt-[6px]">
                    <Text className="2xl:my-[3px] 2xl:text-fs9 3xl:my-[4px] 3xl:text-fs11 font-medium lg:my-[2px] lg:text-fs7 lowercase mx-[auto] my-[5px] text-center text-fs13 text-white_A700 xl:my-[3px] xl:text-fs8">{`1`}</Text>
                  </Column>
                </Row>
              </Column>
              <Row className="2xl:mr-[7px] 2xl:mt-[7px] 3xl:mr-[9px] 3xl:mt-[9px] font-ttnorms items-center justify-start lg:mr-[5px] lg:mt-[5px] mr-[10px] mt-[10px] w-[45%] xl:mr-[6px] xl:mt-[6px]">
                <Row className="bg-blue_500_3f items-center justify-start rounded-radius20 w-[49%]">
                  <Image
                    src="img_iconoutlinefi_1.svg"
                    className="2xl:h-[16px] 2xl:ml-[9px] 2xl:my-[7px] 2xl:w-[15px] 3xl:h-[19px] 3xl:ml-[11px] 3xl:my-[9px] 3xl:w-[18px] h-[20px] lg:h-[12px] lg:ml-[7px] lg:my-[5px] lg:w-[11px] ml-[13px] my-[10px] object-contain w-[20px] xl:h-[14px] xl:ml-[8px] xl:my-[6px] xl:w-[13px]"
                    alt="IconOutlinefi"
                  />
                  <Text className="2xl:ml-[3px] 2xl:mr-[10px] 2xl:my-[9px] 2xl:text-fs10 3xl:ml-[4px] 3xl:mr-[12px] 3xl:my-[10px] 3xl:text-fs12 font-medium lg:ml-[2px] lg:mr-[8px] lg:my-[7px] lg:text-fs8 ml-[5px] mr-[14px] my-[12px] text-blue_500 text-fs14 text-left uppercase xl:ml-[3px] xl:mr-[9px] xl:my-[8px] xl:text-fs9">
                    <span className="text-blue_500 text-fs14 font-ttnorms uppercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`F`}</>
                    </span>
                    <span className="text-blue_500 text-fs14 font-ttnorms lowercase text-left font-medium lg:text-fs8 xl:text-fs9 2xl:text-fs10 3xl:text-fs12">
                      <>{`iles (x2)`}</>
                    </span>
                  </Text>
                </Row>
                <div className="2xl:ml-[15px] 3xl:ml-[18px] bg-transparent border-0 lg:ml-[11px] ml-[20px] w-[42%] xl:ml-[13px] input-wrap">
                  <Image
                    src="img_icon_outline_image.svg"
                    className="absolute left-[13px] bg-transparent border-0 lg:left-[7px] lg:inset-y-[9px] xl:left-[8px] xl:inset-y-[10px] 2xl:left-[9px] 2xl:inset-y-[12px] 3xl:left-[11px] 3xl:inset-y-[14px] inset-y-[16px]"
                    alt="Icon/Outline/image"
                  />
                  <Input
                    className="2xl:pl-[32px] 2xl:py-[12px] 2xl:text-fs10 3xl:pl-[38px] 3xl:py-[14px] 3xl:text-fs12 bg-pink_A200_3f border-0 capitalize font-medium lg:pl-[25px] lg:py-[9px] lg:text-fs8 pl-[43px] placeholder:bg-transparent placeholder:text-pink_A200 py-[16px] rounded-radius20 text-fs14 text-left text-pink_A200 tracking-ls11 w-[100%] xl:pl-[28px] xl:py-[10px] xl:text-fs9"
                    name="Photo"
                    placeholder={`Photo`}
                  ></Input>
                </div>
              </Row>
            </Column>
          </Stack>
          <Stack className="2xl:h-[151px] 2xl:mr-[12px] 2xl:mt-[15px] 3xl:h-[181px] 3xl:mr-[14px] 3xl:mt-[18px] h-[200px] lg:h-[117px] lg:mr-[9px] lg:mt-[11px] ml-[1px] mr-[16px] mt-[20px] w-[97%] xl:h-[134px] xl:mr-[10px] xl:mt-[13px]">
            <Image
              src="img_block_4.png"
              className="2xl:h-[151px] 3xl:h-[181px] absolute h-[200px] inset-[0] lg:h-[117px] object-cover self-stretch w-[100%] xl:h-[134px]"
              alt="Block"
            />
            <Column className="2xl:top-[22px] 3xl:top-[27px] absolute font-ttnorms inset-x-[0] justify-start lg:top-[17px] mx-[auto] top-[30px] w-[86%] xl:top-[20px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                  <Column className="items-center justify-start shadow-bs8 w-[11%]">
                    <Image
                      src="img_24.png"
                      className="2xl:h-[41px] 3xl:h-[49px] h-[54px] lg:h-[32px] object-cover rounded-radius50 self-stretch w-[100%] xl:h-[37px]"
                      alt="24"
                    />
                  </Column>
                  <Column className="2xl:mb-[3px] 2xl:mt-[2px] 3xl:mb-[4px] 3xl:mt-[2px] font-ttnorms justify-start lg:mb-[2px] lg:mt-[1px] mb-[5px] mt-[3px] w-[85%] xl:mb-[3px] xl:mt-[2px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-ttnorms justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:text-fs13 3xl:text-fs16 capitalize font-bold lg:text-fs10 text-center text-fs18 text-gray_900 xl:text-fs12">{`Nika Jerrardo`}</Text>
                        <Text className="2xl:text-fs12 3xl:text-fs14 font-medium lg:text-fs9 lowercase mt-[1px] text-center text-fs16 text-white_A700_bf xl:text-fs10">{`3 days ago`}</Text>
                      </Row>
                    </Column>
                    <Text className="2xl:mr-[7px] 2xl:mt-[4px] 2xl:text-fs12 3xl:mr-[9px] 3xl:mt-[5px] 3xl:text-fs14 font-medium lg:mr-[5px] lg:mt-[3px] lg:text-fs9 lowercase mr-[10px] mt-[6px] text-center text-fs16 text-white_A700 xl:mr-[6px] xl:mt-[4px] xl:text-fs10">{`last online 5 hours ago`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:leading-lh19 2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs12 3xl:leading-lh23 3xl:mr-[9px] 3xl:mt-[15px] 3xl:text-fs14 capitalize font-medium leading-lh2600 lg:leading-lh15 lg:mr-[5px] lg:mt-[9px] lg:text-fs9 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 w-[90%] xl:leading-lh17 xl:mr-[6px] xl:mt-[11px] xl:text-fs10">
                <span className="text-white_A700 text-fs16 font-ttnorms capitalize text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`Cicero `}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`famously orated against his political opponent `}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`L`}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`ucius `}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`S`}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`ergius `}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`C`}</>
                </span>
                <span className="text-white_A700 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`atilina.`}</>
                </span>
              </Text>
            </Column>
          </Stack>
          <Stack className="2xl:h-[185px] 2xl:mr-[12px] 2xl:mt-[15px] 3xl:h-[222px] 3xl:mr-[14px] 3xl:mt-[18px] h-[246px] lg:h-[144px] lg:mr-[9px] lg:mt-[11px] ml-[1px] mr-[16px] mt-[20px] w-[97%] xl:h-[165px] xl:mr-[10px] xl:mt-[13px]">
            <Image
              src="img_block_5.svg"
              className="2xl:h-[185px] 3xl:h-[222px] absolute h-[246px] inset-[0] lg:h-[144px] object-cover self-stretch w-[100%] xl:h-[165px]"
              alt="Block"
            />
            <Column className="2xl:top-[22px] 3xl:top-[27px] absolute font-ttnorms inset-x-[0] justify-start lg:top-[17px] mx-[auto] top-[30px] w-[86%] xl:top-[20px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                  <Column className="items-center justify-start shadow-bs9 w-[11%]">
                    <Image
                      src="img_24_3.png"
                      className="2xl:h-[41px] 3xl:h-[49px] h-[54px] lg:h-[32px] object-cover rounded-radius50 self-stretch w-[100%] xl:h-[37px]"
                      alt="24"
                    />
                  </Column>
                  <Column className="2xl:mb-[3px] 2xl:mt-[2px] 3xl:mb-[4px] 3xl:mt-[2px] font-ttnorms justify-start lg:mb-[2px] lg:mt-[1px] mb-[5px] mt-[3px] w-[85%] xl:mb-[3px] xl:mt-[2px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-ttnorms justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:text-fs13 3xl:text-fs16 capitalize font-bold lg:text-fs10 text-center text-fs18 text-gray_900 xl:text-fs12">{`david Amrosa`}</Text>
                        <Text className="2xl:text-fs12 3xl:text-fs14 font-medium lg:text-fs9 lowercase mt-[1px] text-bluegray_500 text-center text-fs16 xl:text-fs10">{`3 days ago`}</Text>
                      </Row>
                    </Column>
                    <Text className="2xl:mr-[7px] 2xl:mt-[4px] 2xl:text-fs12 3xl:mr-[9px] 3xl:mt-[5px] 3xl:text-fs14 font-medium lg:mr-[5px] lg:mt-[3px] lg:text-fs9 lowercase mr-[10px] mt-[6px] text-blue_500 text-center text-fs16 xl:mr-[6px] xl:mt-[4px] xl:text-fs10">{`last online 5 hours ago`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:leading-lh19 2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs12 3xl:leading-lh23 3xl:mr-[9px] 3xl:mt-[15px] 3xl:text-fs14 capitalize font-medium leading-lh2600 lg:leading-lh15 lg:mr-[5px] lg:mt-[9px] lg:text-fs9 mr-[10px] mt-[17px] text-bluegray_500 text-fs16 text-left w-[90%] xl:leading-lh17 xl:mr-[6px] xl:mt-[11px] xl:text-fs10">
                <span className="text-bluegray_500 text-fs16 font-ttnorms capitalize text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`Cicero `}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`famously orated against his political opponent `}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`L`}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`ucius `}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`S`}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`ergius `}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms uppercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`C`}</>
                </span>
                <span className="text-bluegray_500 text-fs16 font-ttnorms lowercase text-left font-medium lg:text-fs9 xl:text-fs10 2xl:text-fs12 3xl:text-fs14">
                  <>{`atilina.`}</>
                </span>
              </Text>
              <div className="2xl:mr-[7px] 2xl:mt-[9px] 3xl:mr-[9px] 3xl:mt-[11px] bg-transparent border-0 lg:mr-[5px] lg:mt-[7px] mr-[10px] mt-[13px] w-[23%] xl:mr-[6px] xl:mt-[8px] input-wrap">
                <Image
                  src="img_icon_outline_film.svg"
                  className="absolute left-[13px] bg-transparent border-0 lg:left-[7px] lg:inset-y-[9px] xl:left-[8px] xl:inset-y-[10px] 2xl:left-[9px] 2xl:inset-y-[12px] 3xl:left-[11px] 3xl:inset-y-[14px] inset-y-[16px]"
                  alt="Icon/Outline/film"
                />
                <Input
                  className="2xl:pl-[32px] 2xl:py-[12px] 2xl:text-fs10 3xl:pl-[38px] 3xl:py-[14px] 3xl:text-fs12 bg-green_A700_3f border-0 capitalize font-medium lg:pl-[25px] lg:py-[9px] lg:text-fs8 pl-[43px] placeholder:bg-transparent placeholder:text-green_A700 py-[16px] rounded-radius20 text-fs14 text-green_A700 text-left w-[100%] xl:pl-[28px] xl:py-[10px] xl:text-fs9"
                  name="Video (x3)"
                  placeholder={`Video (x3)`}
                ></Input>
              </div>
            </Column>
          </Stack>
        </Column>
      </Stack>
    </Column>
  );
};

export default ChatDashboardPage;
