
import ChangeLogGeneratorService from "../../src/services/ChangeLogGeneratorService";
import ChangeLogRequestDTO from '../../src/dtos/ChangeLogRequestDTO';

describe('testing ChangeLogGeneratorService file', () => {
  test('Should generate changeLog ', async () => {

    
    let changeLogGeneratorService = new  ChangeLogGeneratorService();
    let urlCurrent = "https://raw.githubusercontent.com/OpenBanking-Brasil/draft-openapi/main/swagger-apis/channels/2.0.0-rc.1.yml";
    let urlOld = "https://raw.githubusercontent.com/OpenBanking-Brasil/draft-openapi/main/swagger-apis/channels/2.0.0-beta.1.yml";

    let requestChangeLog = new ChangeLogRequestDTO();
    requestChangeLog.urlOld = urlOld;
    requestChangeLog.urlCurrent = urlCurrent;

    let result = await changeLogGeneratorService.GenerateChangeLogWithUrlYaml(requestChangeLog);

    expect(result.changesLog).toBeInstanceOf(Array)
    expect(result.changesLog[0].field).toBe("description")
    expect(result.changesLog[0].description).toBe("'description' alterado;")

  });
});