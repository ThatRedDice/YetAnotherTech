declare module "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayPolicy" {
import {$ArrayHandlingPolicy} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayHandlingPolicy"
import {$Enum} from "java.lang.Enum"

export class $ArrayPolicy extends $Enum<($ArrayPolicy)> {
static readonly "DISALLOWS_ARRAYS": $ArrayPolicy
static readonly "REQUIRES_ARRAY": $ArrayPolicy
static readonly "ALLOWS_ARRAYS": $ArrayPolicy

public "getNonEmpty"(): $ArrayHandlingPolicy
public "get"(): $ArrayHandlingPolicy
public static "values"(): ($ArrayPolicy)[]
public static "valueOf"(arg0: StringJS): $ArrayPolicy
get "nonEmpty"(): $ArrayHandlingPolicy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayPolicy$$Type = (("disallows_arrays") | ("allows_arrays") | ("requires_array"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayPolicy$$Original = $ArrayPolicy;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager$ObjectValidator" {
import {$Function} from "java.util.function.Function"
import {$AbstractValidator} from "com.ridanisaurus.emendatusenigmatica.api.validation.validators.AbstractValidator"
import {$ValidationData$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationData"

export class $ValidationManager$ObjectValidator extends $AbstractValidator {
public "apply"(arg0: $ValidationData$$Type): boolean
public "apply"(arg0: any): any
public "validate"(arg0: $ValidationData$$Type): boolean
public static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationManager$ObjectValidator$$Type = ($ValidationManager$ObjectValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationManager$ObjectValidator$$Original = $ValidationManager$ObjectValidator;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.validators.AbstractValidator" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IValidationFunction$$Interface} from "com.ridanisaurus.emendatusenigmatica.api.validation.validators.IValidationFunction"
import {$ValidationData, $ValidationData$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationData"

export class $AbstractValidator implements $IValidationFunction$$Interface {
constructor(arg0: boolean)

public "getAdditional"(arg0: $ValidationData$$Type): StringJS
public "apply"(arg0: any): any
public "apply"(arg0: $ValidationData$$Type): boolean
public "validate"(arg0: $ValidationData$$Type): boolean
public "isRequired"(arg0: $ValidationData$$Type): boolean
public static "identity"<T>(): $Function<($ValidationData), ($ValidationData)>
public "compose"<V>(arg0: $Function$$Type<(V), ($ValidationData$$Type)>): $Function<(V), (boolean)>
public "andThen"<V>(arg0: $Function$$Type<(boolean), (V)>): $Function<($ValidationData), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractValidator$$Type = ($AbstractValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractValidator$$Original = $AbstractValidator;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationData" {
import {$Types$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.Types"
import {$ArrayHandlingPolicy, $ArrayHandlingPolicy$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayHandlingPolicy"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record} from "java.lang.Record"
import {$ArrayPolicy$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayPolicy"

export class $ValidationData extends $Record {
/**
 * 
 * @deprecated
 */
constructor(arg0: $JsonElement$$Type, arg1: $JsonObject$$Type, arg2: StringJS, arg3: StringJS, arg4: $ArrayPolicy$$Type)
constructor(validationElement: $JsonElement$$Type, rootObject: $JsonObject$$Type, currentPath: StringJS, jsonFilePath: StringJS, arrayPolicy: $ArrayHandlingPolicy$$Type)

public "currentPath"(): StringJS
public "getParentField"(arg0: StringJS): $JsonElement
public "jsonFilePath"(): StringJS
public "validationElement"(): $JsonElement
public "arrayPolicy"(): $ArrayHandlingPolicy
public "getWithField"(arg0: StringJS, arg1: $ArrayHandlingPolicy$$Type): $ValidationData
public "rootObject"(): $JsonObject
public "getParentFieldPath"(arg0: StringJS): StringJS
public "getParentPath"(): StringJS
public "getParentFieldAs"(arg0: $Types$$Type, arg1: StringJS): $JsonElement
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "parentPath"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationData$$Type = ({"currentPath"?: StringJS, "arrayPolicy"?: $ArrayHandlingPolicy$$Type, "rootObject"?: $JsonObject$$Type, "jsonFilePath"?: StringJS, "validationElement"?: $JsonElement$$Type}) | ([currentPath?: StringJS, arrayPolicy?: $ArrayHandlingPolicy$$Type, rootObject?: $JsonObject$$Type, jsonFilePath?: StringJS, validationElement?: $JsonElement$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationData$$Original = $ValidationData;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.enums.Types" {
import {$Enum} from "java.lang.Enum"

export class $Types extends $Enum<($Types)> {
static readonly "FLOAT": $Types
static readonly "STRING": $Types
static readonly "BOOLEAN": $Types
static readonly "INTEGER": $Types
static readonly "STRING_EMPTY": $Types

public "toString"(): StringJS
public static "values"(): ($Types)[]
public static "valueOf"(arg0: StringJS): $Types
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Types$$Type = (("boolean") | ("integer") | ("float") | ("string") | ("string_empty"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Types$$Original = $Types;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayHandlingPolicy" {
import {$ArrayPolicy} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayPolicy"

export class $ArrayHandlingPolicy {
public "allowsArrays"(): boolean
public "canBeEmpty"(): boolean
public "requiresArray"(): boolean
public "getLegacyArrayPolicy"(): $ArrayPolicy
get "legacyArrayPolicy"(): $ArrayPolicy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayHandlingPolicy$$Type = ($ArrayHandlingPolicy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayHandlingPolicy$$Original = $ArrayHandlingPolicy;}
declare module "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager" {
import {$ArrayHandlingPolicy$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayHandlingPolicy"
import {$ValidationManager$ObjectValidator} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager$ObjectValidator"
import {$Function$$Type} from "java.util.function.Function"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Path$$Type} from "java.nio.file.Path"
import {$ValidationData$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationData"
import {$ArrayPolicy$$Type} from "com.ridanisaurus.emendatusenigmatica.api.validation.enums.ArrayPolicy"

export class $ValidationManager {
public "addValidator"(arg0: StringJS, arg1: $Function$$Type<($ValidationData), (boolean)>, arg2: $ArrayHandlingPolicy$$Type): $ValidationManager
/**
 * 
 * @deprecated
 */
public "addValidator"(arg0: StringJS, arg1: $Function$$Type<($ValidationData), (boolean)>, arg2: $ArrayPolicy$$Type): $ValidationManager
public "addValidator"(arg0: StringJS, arg1: $Function$$Type<($ValidationData), (boolean)>): $ValidationManager
public "getAsValidator"(arg0: boolean): $ValidationManager$ObjectValidator
public "validate"(arg0: $JsonObject$$Type, arg1: $Path$$Type): boolean
public static "create"(): $ValidationManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationManager$$Type = ($ValidationManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationManager$$Original = $ValidationManager;}
