import { customAttribute } from "../../export"

export const getDataId = (elem: Element | any) => {
    return elem.getAttribute(customAttribute.dataId)
}