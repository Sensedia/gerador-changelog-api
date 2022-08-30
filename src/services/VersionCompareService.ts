import ChangeLogRequestDTO from "src/dtos/ChangeLogRequestDTO";
import ChangeLogViewOutputDTO from "../dtos/ChangeLogViewOutputDTO";
import OpenAPIValidationHandler from "../validation/OpenAPIValidationHandler";
import ChangeLogService from "./ChangeLogService";
import DiffCheckerService from "./DiffCheckerService";
import FormattingChangeService from "./FormattingChangeService";
import SwaggerDereferencerService from "./SwaggerDereferencerService";
import SwaggerPreparationDataService from "./SwaggerPreparationDataService";
import TemplateDescriptionDTO from '../dtos/TemplateDescriptionDTO';

export default class VersionCompareService {
    private _changeLogService: ChangeLogService;
    private _diffCheckerService: DiffCheckerService;
    private _formattingChangeService : FormattingChangeService;

    constructor() {
        this._changeLogService = new ChangeLogService();
        this._diffCheckerService = new DiffCheckerService();
        this._formattingChangeService = new FormattingChangeService();
    }

    private async getChanges(urlOld: string, urlCurrent: string, templateDescription?: TemplateDescriptionDTO): Promise<ChangeLogViewOutputDTO[]>{
        
        let objOld = await  SwaggerDereferencerService.dereference(urlOld);
        let objCurrent = await SwaggerDereferencerService.dereference(urlCurrent);

        await  new OpenAPIValidationHandler().handleValidation(objOld, objCurrent)

        let objOldWithComponents =   SwaggerPreparationDataService.Prepare(objOld);
        let objCurrentWithComponents =   SwaggerPreparationDataService.Prepare(objCurrent);
        
        let changes = this._diffCheckerService.getChangeDiff(objOldWithComponents, objCurrentWithComponents);
        let changeLogs = this._changeLogService.getChangeLog(changes, templateDescription);
        
        let changesView = this._formattingChangeService.formatting(changeLogs);

        return changesView;
    }

    public async compare(request: ChangeLogRequestDTO): Promise<ChangeLogViewOutputDTO[]> {
        const { urlOld, urlCurrent, templateDescription } = request;
        let changesView =  await this.getChanges(urlOld, urlCurrent, templateDescription);

        return changesView;
    }

}