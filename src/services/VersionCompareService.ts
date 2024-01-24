import ChangeLogRequestDTO from "src/dtos/ChangeLogRequestDTO";
import ChangeLogViewOutputDTO from "../dtos/ChangeLogViewOutputDTO";
import OpenAPIValidationHandler from "../validation/OpenAPIValidationHandler";
import ChangeLogService from "./ChangeLogService";
import DiffCheckerService from "./DiffCheckerService";
import FormattingChangeService from "./FormattingChangeService";
import SwaggerDereferencerService from "./SwaggerDereferencerService";
import SwaggerPreparationDataService from "./SwaggerPreparationDataService";
import InfoApiFromChangeLogService from "./InfoApiFromChangeLogService";
import TemplateDescriptionDTO from '../dtos/TemplateDescriptionDTO';
import ResultInfoChangeDTO from "../dtos/ResultInfoChangeDTO";

export default class VersionCompareService {
    private _changeLogService: ChangeLogService;
    private _diffCheckerService: DiffCheckerService;
    private _formattingChangeService : FormattingChangeService;

    constructor() {
        this._changeLogService = new ChangeLogService();
        this._diffCheckerService = new DiffCheckerService();
        this._formattingChangeService = new FormattingChangeService();
    }

    private async getChanges(objOld: any, objCurrent: any, templateDescription?: TemplateDescriptionDTO): Promise<ChangeLogViewOutputDTO[]>{

        let changes = this._diffCheckerService.getChangeDiff(objOld, objCurrent);
        let changeLogs = this._changeLogService.getChangeLog(changes, templateDescription);
        
        let changesView = this._formattingChangeService.formatting(changeLogs);

        return changesView;
    }

    public async compare(request: ChangeLogRequestDTO): Promise<ResultInfoChangeDTO> {
        const { urlOld, urlCurrent, templateDescription } = request;

        let objOld = await  SwaggerDereferencerService.dereference(request.urlOld);
        let objCurrent = await SwaggerDereferencerService.dereference(request.urlCurrent);

       // await  new OpenAPIValidationHandler().handleValidation(objOld, objCurrent)

        let objOldWithComponents =   SwaggerPreparationDataService.Prepare(objOld);
        let objCurrentWithComponents =   SwaggerPreparationDataService.Prepare(objCurrent);

        let changesView =  await this.getChanges(objOldWithComponents, objCurrentWithComponents, templateDescription);
        let result  = InfoApiFromChangeLogService.getInformationAboutApis(objOldWithComponents, objCurrentWithComponents, urlOld, urlCurrent   );
        result.changesLog = changesView;
        return result;
    }

}