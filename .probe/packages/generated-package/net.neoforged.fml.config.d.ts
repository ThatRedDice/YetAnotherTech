declare module "net.neoforged.fml.config.IConfigSpec" {
import {$ModConfig$$Type} from "net.neoforged.fml.config.ModConfig"
import {$UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$IConfigSpec$ILoadedConfig$$Type} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$CommentedConfig$$Type} from "com.electronwill.nightconfig.core.CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec$$Interface {
get "empty"(): boolean
}

export class $IConfigSpec implements $IConfigSpec$$Interface {
 "validateSpec"(arg0: $ModConfig$$Type): void
 "acceptConfig"(arg0: $IConfigSpec$ILoadedConfig$$Type): void
 "isEmpty"(): boolean
 "isCorrect"(arg0: $UnmodifiableCommentedConfig$$Type): boolean
 "correct"(arg0: $CommentedConfig$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$$Type = ($IConfigSpec);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigSpec$$Original = $IConfigSpec;}
declare module "net.neoforged.fml.config.ModConfig" {
import {$ModConfig$Type} from "net.neoforged.fml.config.ModConfig$Type"
import {$IConfigSpec$ILoadedConfig} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$Path} from "java.nio.file.Path"
import {$IConfigSpec} from "net.neoforged.fml.config.IConfigSpec"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {
public "getLoadedConfig"(): $IConfigSpec$ILoadedConfig
public "getType"(): $ModConfig$Type
public "getFileName"(): StringJS
public "getSpec"(): $IConfigSpec
public "getModId"(): StringJS
public "getFullPath"(): $Path
get "loadedConfig"(): $IConfigSpec$ILoadedConfig
get "type"(): $ModConfig$Type
get "fileName"(): StringJS
get "spec"(): $IConfigSpec
get "modId"(): StringJS
get "fullPath"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$$Type = ($ModConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfig$$Original = $ModConfig;}
declare module "net.neoforged.fml.config.IConfigSpec$ILoadedConfig" {
import {$CommentedConfig} from "com.electronwill.nightconfig.core.CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec$ILoadedConfig$$Interface {
}

export class $IConfigSpec$ILoadedConfig implements $IConfigSpec$ILoadedConfig$$Interface {
 "save"(): void
 "config"(): $CommentedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$ILoadedConfig$$Type = ($IConfigSpec$ILoadedConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigSpec$ILoadedConfig$$Original = $IConfigSpec$ILoadedConfig;}
declare module "net.neoforged.fml.config.ModConfig$Type" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<($ModConfig$Type)> {
static readonly "SERVER": $ModConfig$Type
static readonly "COMMON": $ModConfig$Type
static readonly "STARTUP": $ModConfig$Type
static readonly "CLIENT": $ModConfig$Type

public "extension"(): StringJS
public static "values"(): ($ModConfig$Type)[]
public static "valueOf"(arg0: StringJS): $ModConfig$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type$$Type = (("common") | ("client") | ("server") | ("startup"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfig$Type$$Original = $ModConfig$Type;}
