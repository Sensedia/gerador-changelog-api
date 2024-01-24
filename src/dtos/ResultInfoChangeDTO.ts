import ChangeLogViewOutputDTO from "./ChangeLogViewOutputDTO";
import InfoApisComparatorDTO from "./InfoApisComparatorDTO";

export default class ResultInfoChangeDTO{
    public oldApi !: InfoApisComparatorDTO
    public currentApi !:  InfoApisComparatorDTO
    public changesLog?: ChangeLogViewOutputDTO[]
}