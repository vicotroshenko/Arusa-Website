
interface IBorders {
  borderLeft: string;
  borderRight: string; 
  borderTop: string; 
  borderBottom: string;
}

export const getBorders = (border: string[]):IBorders => {
  return border.reduce((acc:IBorders, item: string) => {
    switch(item){
      case "left":
        acc.borderLeft = "1px solid";
        break;
      case "right":
        acc.borderRight = "1px solid";
        break;
      case "top":
        acc.borderTop = "1px solid";
        break;
      case "bottom":
        acc.borderBottom = "1px solid";
        break;
      default:
        return acc;
    }
    return acc;
  },{borderLeft: "none", borderRight: "none", borderTop: "none", borderBottom: "none"})
};