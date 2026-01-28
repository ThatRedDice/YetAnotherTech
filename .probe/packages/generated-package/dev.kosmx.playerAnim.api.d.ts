declare module "dev.kosmx.playerAnim.api.IPlayer" {
import {$AnimationStack, $AnimationStack$$Type} from "dev.kosmx.playerAnim.api.layered.AnimationStack"

export interface $IPlayer$$Interface {

(): $AnimationStack$$Type
get "animationStack"(): $AnimationStack
}

export class $IPlayer implements $IPlayer$$Interface {
 "getAnimationStack"(): $AnimationStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayer$$Type = (() => $AnimationStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayer$$Original = $IPlayer;}
declare module "dev.kosmx.playerAnim.api.TransformType" {
import {$Enum} from "java.lang.Enum"

export class $TransformType extends $Enum<($TransformType)> {
static readonly "ROTATION": $TransformType
static readonly "POSITION": $TransformType
static readonly "BEND": $TransformType
static readonly "SCALE": $TransformType

public static "values"(): ($TransformType)[]
public static "valueOf"(name: StringJS): $TransformType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformType$$Type = (("position") | ("rotation") | ("bend") | ("scale"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformType$$Original = $TransformType;}
declare module "dev.kosmx.playerAnim.api.layered.IAnimation" {
import {$FirstPersonMode} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export interface $IAnimation$$Interface {
set "upAnim"(value: float)
get "active"(): boolean
}

export class $IAnimation implements $IAnimation$$Interface {
 "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
 "get3DTransform"(arg0: StringJS, arg1: $TransformType$$Type, arg2: float, arg3: $Vec3f$$Type): $Vec3f
 "setupAnim"(arg0: float): void
 "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
 "tick"(): void
 "isActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimation$$Type = ($IAnimation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAnimation$$Original = $IAnimation;}
declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode" {
import {$Enum} from "java.lang.Enum"

export class $FirstPersonMode extends $Enum<($FirstPersonMode)> {
static readonly "DISABLED": $FirstPersonMode
static readonly "THIRD_PERSON_MODEL": $FirstPersonMode
static readonly "VANILLA": $FirstPersonMode
static readonly "NONE": $FirstPersonMode

public static "isFirstPersonPass"(): boolean
public static "values"(): ($FirstPersonMode)[]
public static "valueOf"(name: StringJS): $FirstPersonMode
public "isEnabled"(): boolean
public static "setFirstPersonPass"(newValue: boolean): void
public static get "firstPersonPass"(): boolean
get "enabled"(): boolean
public static set "firstPersonPass"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonMode$$Type = (("none") | ("vanilla") | ("third_person_model") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FirstPersonMode$$Original = $FirstPersonMode;}
declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FirstPersonConfiguration {
constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean)
constructor()

public "isShowRightArm"(): boolean
public "isShowLeftArm"(): boolean
public "setShowLeftArm"(showLeftArm: boolean): $FirstPersonConfiguration
public "setShowRightArm"(showRightArm: boolean): $FirstPersonConfiguration
public "isShowRightItem"(): boolean
public "setShowLeftItem"(showLeftItem: boolean): $FirstPersonConfiguration
public "isShowLeftItem"(): boolean
public "setShowRightItem"(showRightItem: boolean): $FirstPersonConfiguration
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "showRightArm"(): boolean
get "showLeftArm"(): boolean
set "showLeftArm"(value: boolean)
set "showRightArm"(value: boolean)
get "showRightItem"(): boolean
set "showLeftItem"(value: boolean)
get "showLeftItem"(): boolean
set "showRightItem"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonConfiguration$$Type = ($FirstPersonConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FirstPersonConfiguration$$Original = $FirstPersonConfiguration;}
declare module "dev.kosmx.playerAnim.api.layered.AnimationStack" {
import {$FirstPersonMode} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$IAnimation$$Type, $IAnimation$$Interface} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export class $AnimationStack implements $IAnimation$$Interface {
constructor()

public "addAnimLayer"(priority: integer, layer: $IAnimation$$Type): void
public "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
public "get3DTransform"(modelName: StringJS, type: $TransformType$$Type, tickDelta: float, value0: $Vec3f$$Type): $Vec3f
public "setupAnim"(tickDelta: float): void
public "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
public "removeLayer"(layerLevel: integer): boolean
public "removeLayer"(layer: $IAnimation$$Type): boolean
public "tick"(): void
public "isActive"(): boolean
set "upAnim"(value: float)
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStack$$Type = ($AnimationStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationStack$$Original = $AnimationStack;}
