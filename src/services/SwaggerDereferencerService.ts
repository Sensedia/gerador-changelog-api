import SwaggerParser from "@apidevtools/swagger-parser"

export default class SwaggerDereferencerService {

    public static async dereference(spec: string): Promise<any> {
        return SwaggerParser.dereference(spec)
    }
}