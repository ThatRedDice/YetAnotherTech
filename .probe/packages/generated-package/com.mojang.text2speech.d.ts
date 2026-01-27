declare module "com.mojang.text2speech.Narrator" {
import {$Logger} from "org.slf4j.Logger"

export interface $Narrator$$Interface {
public static get "narrator"(): $Narrator
}

export class $Narrator implements $Narrator$$Interface {
static readonly "LOGGER": $Logger
static readonly "EMPTY": $Narrator

 "active"(): boolean
 "clear"(): void
 "destroy"(): void
static "getNarrator"(): $Narrator
 "say"(arg0: StringJS, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Narrator$$Type = ($Narrator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Narrator$$Original = $Narrator;}
