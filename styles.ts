import styled from 'styled-components'

import {Layout} from 'antd' 
import {Row} from 'antd' 
import {CalendarOutlined} from '@ant-design/icons'
import {FlagOutlined} from '@ant-design/icons'
import {ExpandOutlined} from '@ant-design/icons'
import {GroupOutlined} from '@ant-design/icons'
import {Button} from 'antd' 

export const ProductCard = styled(Layout)`
width:292px;
height:609px;
position:relative;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:flex-start;
align-items:flex-start;
border-radius:8px;
    background-color:#FCFCFF;
    box-shadow:0px 9px 28px 8px rgba(0, 0, 0, 0.05000000074505806)  , 0px 6px 16px 0px rgba(0, 0, 0, 0.07999999821186066)  ,  0px 3px 6px -4px rgba(0, 0, 0, 0.11999999731779099)    ;
`;
export const ProductCardHeader = styled(Row).attrs({
})`
width:292px;
height:52px;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:center;
align-items:center;
    padding:16.0px 16.0px 16.0px 16.0px;
        padding-top:16.0px;
        padding-left:16.0px;
        padding-bottom:16.0px;
        padding-right:16.0px;
`;
export const CalendarOutlinedIcon = styled(CalendarOutlined)`
            color:#F88F1F;
            font-size:16px;
`;

export const ProductOfferType = styled(Row).attrs({
})`
width:136px;
height:20px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:flex-start;
align-items:center;
border-radius:4px;
    padding:4.0px 8.0px 4.0px 8.0px;
        padding-top:4.0px;
        padding-left:8.0px;
        padding-bottom:4.0px;
        padding-right:8.0px;
    background-color:#FBAE15;
`;
export const ProdutonositioVOL = styled.h1`
            font-family:Roboto;
            font-weight:500;
            font-size:12px;
            line-height:12px;
            color:#FFFFFF;
            text-align:center;
`;

export const ProductImage = styled.div`
flex-direction: column;
width:100%;
flex:10;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:12.0px;;
column-gap:12.0px;;
justify-content:flex-start;
align-items:center;
`;
export const PhotoCarouselWide = styled(Row).attrs({
})`
width:292px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
    background-color:#FFFFFF;
`;
export const ProductPhoto = styled.img`
    height:130px;
    width:292px;
`;

export const ImageCaption = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProductCardFooter = styled.div`
flex-direction: column;
width:292px;
height:106px;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:flex-start;
padding:16.0px 16.0px 16.0px 16.0px;
padding-top:16.0px;
padding-left:16.0px;
padding-bottom:16.0px;
padding-right:16.0px;
`;
export const MainInfo = styled(Row).attrs({
justify: 'space-between',
})`
width:260px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:space-between;
align-items:flex-end;
`;
export const ProductName = styled.h1`
        font-family:Roboto;
        font-weight:500;
        font-size:16px;
        line-height:16px;
        color:#36393A;
        text-align:left;
`;

export const PriceInfo = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:flex-start;
align-items:center;
`;
export const PriceInfoLabel = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:10px;
        line-height:10px;
        color:#8D8D8D;
        text-align:center;
`;

export const PriceOld = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#F88F1F;
    text-align:center;
`;

export const PriceNew = styled(Row).attrs({
})`
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
`;
export const Currency = styled.h1`
    font-family:Roboto;
    font-weight:700;
    font-size:10px;
    line-height:10px;
    color:#005CA8;
    text-align:center;
`;

export const Price = styled.h1`
font-family:Roboto;
font-weight:700;
font-size:20px;
line-height:20px;
color:#005CA8;
text-align:center;
`;

export const Unit = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const SecondaryInfo = styled(Row).attrs({
justify: 'space-between',
})`
width:260px;
height:26px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:space-between;
align-items:flex-start;
`;
export const ProductCodes = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:4.0px;;
column-gap:4.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const ProductCode = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:10px;
        line-height:10px;
        color:#8D8D8D;
        text-align:center;
`;

export const BarCode = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProducedBy = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:4.0px;;
column-gap:4.0px;;
justify-content:flex-start;
align-items:flex-end;
`;
export const ProducedByLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProducedByValue = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#36393A;
text-align:left;
`;

export const ProductCardExpanded = styled.div`
flex-direction: column;
width:292px;
height:321px;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:flex-start;
align-items:flex-start;
`;
export const ProductInfo = styled.div`
flex-direction: column;
width:292px;
height:164px;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:16.0px;;
column-gap:16.0px;;
justify-content:flex-start;
align-items:flex-start;
padding-left:16.0px;
padding-bottom:8.0px;
padding-right:16.0px;
`;
export const ProductNote = styled.div`
flex-direction: column;
width:100%;
flex:9;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const ProductNoteLabel = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:12px;
        line-height:12px;
        color:#36393A;
        text-align:left;
`;

export const ProductNoteValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductDetails = styled(Row).attrs({
})`
width:100%;
flex:7;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:center;
align-items:flex-start;
`;
export const ProductDetailLeft = styled.div`
flex-direction: column;
height:100%;
flex:5;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const ProductQuality = styled(Row).attrs({
})`
width:100%;
flex:3;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const QualityIcon = styled(Row).attrs({
})`
width:18px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
border-radius:4px;
`;
export const FlagOutlinedIcon = styled(FlagOutlined)`
                color:#F88F1F;
                font-size:16px;
`;

export const QualityInfo = styled.div`
flex-direction: column;
height:100%;
flex:8;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:center;
align-items:flex-start;
`;
export const QualityInfoLabel = styled.h1`
            font-family:Roboto;
            font-weight:400;
            font-size:12px;
            line-height:12px;
            color:#36393A;
            text-align:left;
`;

export const QualityInfoValue = styled.h1`
        font-family:Roboto;
        font-weight:500;
        font-size:14px;
        line-height:14px;
        color:#36393A;
        text-align:left;
`;

export const ProductSize = styled(Row).attrs({
})`
width:100%;
flex:3;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const SizeIcon = styled(Row).attrs({
})`
width:18px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
border-radius:4px;
`;
export const ExpandOutlinedIcon = styled(ExpandOutlined)`
            color:#F88F1F;
            font-size:16px;
`;

export const SizeInfo = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const SizeInfoLabel = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:12px;
        line-height:12px;
        color:#36393A;
        text-align:left;
`;

export const SizeInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductMultiple = styled(Row).attrs({
})`
width:100%;
flex:3;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const MultipleIcon = styled(Row).attrs({
})`
width:18px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
border-radius:4px;
`;
export const GroupOutlinedIcon = styled(GroupOutlined)`
        color:#F88F1F;
        font-size:16px;
`;

export const MultipleInfo = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const MultipleLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const MultipleValue = styled.h1`
font-family:Roboto;
font-weight:500;
font-size:14px;
line-height:14px;
color:#36393A;
text-align:left;
`;

export const ProductDetailRight = styled.div`
flex-direction: column;
height:100%;
flex:5;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const ProductColor = styled(Row).attrs({
})`
width:100%;
flex:3;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const ColorIcon = styled(Row).attrs({
})`
width:18px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
border-radius:4px;
`;
export const ExpandOutlinedIcon = styled(ExpandOutlined)`
        color:#F88F1F;
        font-size:16px;
`;

export const ColorInfo = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const ColorInfoLabel = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:12px;
        line-height:12px;
        color:#36393A;
        text-align:left;
`;

export const ColorInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductPackage = styled(Row).attrs({
})`
width:100%;
flex:3;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const PackageIcon = styled(Row).attrs({
})`
width:18px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:center;
align-items:center;
border-radius:4px;
`;
export const ExpandOutlinedIcon = styled(ExpandOutlined)`
    color:#F88F1F;
    font-size:16px;
`;

export const PackageInfo = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:2.0px;;
column-gap:2.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const PackageInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const PackageInfoValue = styled.h1`
font-family:Roboto;
font-weight:500;
font-size:14px;
line-height:14px;
color:#36393A;
text-align:left;
`;

export const ProductCardActions = styled.div`
flex-direction: column;
width:292px;
height:156px;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:16.0px;;
column-gap:16.0px;;
justify-content:flex-start;
align-items:center;
padding:16.0px 16.0px 16.0px 16.0px;
padding-top:16.0px;
padding-left:16.0px;
padding-bottom:16.0px;
padding-right:16.0px;
    background-color:#F6F6F6;
`;
export const PriceOptions = styled.div`
flex-direction: column;
width:260px;
height:76px;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:flex-start;
align-items:center;
`;
export const RadioGroupCustom = styled(Row).attrs({
})`
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:flex-start;
align-items:flex-start;
`;
export const RadioCustomFirst = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:center;
align-items:center;
padding:5.0px 16.0px 5.0px 16.0px;
    padding-top:5.0px;
    padding-left:16.0px;
    padding-bottom:5.0px;
    padding-right:16.0px;
    background-color:#F88F1F;
    box-shadow:inset 1px 0px 0px 0px #DADADA, inset 0px -1px 0px 0px #DADADA,  inset 0px 1px 0px 0px #DADADA  ;
`;
export const RadioCustomFirstLabel = styled.h1`
        font-family:Roboto;
        font-weight:400;
        font-size:8px;
        line-height:8px;
        color:#FFFFFF;
        text-align:center;
`;

export const RadioCustomFirstPrice = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
    color:#FFFFFF;
    text-align:center;
`;

export const RadioCustomCenter = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:center;
align-items:center;
padding:5.0px 16.0px 5.0px 16.0px;
padding-top:5.0px;
padding-left:16.0px;
padding-bottom:5.0px;
padding-right:16.0px;
    background-color:#FFFFFF;
    box-shadow:inset 0px -1px 0px 0px #DADADA,  inset 0px 1px 0px 0px #DADADA ;
`;
export const RadioCustomCenterLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:8px;
    line-height:8px;
    color:#36393A;
    text-align:left;
`;

export const RadioCustomCenterPrice = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:14px;
line-height:22px;
color:#F88F1F;
text-align:left;
`;

export const RadioCustomLast = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:center;
align-items:center;
padding:5.0px 16.0px 5.0px 16.0px;
padding-top:5.0px;
padding-left:16.0px;
padding-bottom:5.0px;
padding-right:16.0px;
    background-color:#FFFFFF;
    box-shadow:inset -1px 0px 0px 0px #DADADA, inset 0px -1px 0px 0px #DADADA,  inset 0px 1px 0px 0px #DADADA  ;
`;
export const RadioCustomLastLabel = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:8px;
line-height:8px;
color:#36393A;
text-align:left;
`;

export const RadioCustomLastPrice = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:14px;
line-height:22px;
color:#F88F1F;
text-align:left;
`;

export const AmountInfo = styled(Row).attrs({
justify: 'space-between',
})`
width:260px;
display:flex;
flex-direction:row;
box-sizing:border-box;
justify-content:space-between;
align-items:center;
`;
export const MinimumPurchase = styled(Row).attrs({
})`
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:4.0px;;
column-gap:4.0px;;
justify-content:flex-start;
align-items:center;
`;
export const MinimumPurchaseLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:right;
`;

export const MinimunAmount = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:right;
`;

export const AvailableQuantity = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
row-gap:4.0px;;
column-gap:4.0px;;
justify-content:center;
align-items:flex-end;
`;
export const AvailableInfo = styled(Row).attrs({
})`
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:4.0px;;
column-gap:4.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const AvailableAmount = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:right;
`;

export const AvailableInfoLabel = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#36393A;
text-align:right;
`;

export const AvailablePer = styled(Row).attrs({
})`
width:100%;
flex:4;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:16.0px;;
column-gap:16.0px;;
justify-content:flex-start;
align-items:flex-start;
`;
export const AvailablePackage = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const AvailablePerLabelPackage = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const AvailableLayer = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const AvailablePerLabelCart = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const AvailableCart = styled.h1`
font-family:Roboto;
font-weight:400;
font-size:12px;
line-height:12px;
color:#8D8D8D;
text-align:center;
`;

export const OrderActions = styled(Row).attrs({
})`
width:260px;
height:32px;
display:flex;
flex-direction:row;
box-sizing:border-box;
row-gap:8.0px;;
column-gap:8.0px;;
justify-content:center;
align-items:center;
`;
export const Frame826 = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:flex-start;
align-items:flex-start;
`;
export const ButtonNetwork = styled(Button)`
width:32px;
height:32px;
border-radius:2px;
font-family:Roboto;
font-size:14px;
font-weight:400;
height:32px;
line-height:22px;
`;

export const Frame825 = styled.div`
flex-direction: column;
display:flex;
flex-direction:column;
box-sizing:border-box;
justify-content:flex-start;
align-items:flex-start;
`;
export const ButtonNetwork = styled(Button)`
width:32px;
height:32px;
border-radius:2px;
font-family:Roboto;
font-size:14px;
font-weight:400;
height:32px;
line-height:22px;
`;

