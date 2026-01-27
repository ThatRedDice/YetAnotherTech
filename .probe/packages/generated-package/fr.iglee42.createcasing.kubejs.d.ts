declare module "fr.iglee42.createcasing.kubejs.wrappers.KJSSpriteShiftWrapper" {
import {$CTSpriteShiftEntry} from "com.simibubi.create.foundation.block.connected.CTSpriteShiftEntry"
import {$CTType$$Type} from "com.simibubi.create.foundation.block.connected.CTType"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteShiftEntry} from "net.createmod.catnip.render.SpriteShiftEntry"

export interface $KJSSpriteShiftWrapper$$Interface {
}

export class $KJSSpriteShiftWrapper implements $KJSSpriteShiftWrapper$$Interface {
static "getFromCreate"(arg0: StringJS, arg1: StringJS): $SpriteShiftEntry
static "getFromCreate"(arg0: StringJS): $SpriteShiftEntry
static "omni"(arg0: $ResourceLocation$$Type): $CTSpriteShiftEntry
static "getCT"(arg0: $CTType$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $CTSpriteShiftEntry
static "getCT"(arg0: $CTType$$Type, arg1: $ResourceLocation$$Type): $CTSpriteShiftEntry
static "get"(arg0: StringJS, arg1: StringJS): $SpriteShiftEntry
static "horizontal"(arg0: $ResourceLocation$$Type): $CTSpriteShiftEntry
static "vertical"(arg0: $ResourceLocation$$Type): $CTSpriteShiftEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSSpriteShiftWrapper$$Type = ($KJSSpriteShiftWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KJSSpriteShiftWrapper$$Original = $KJSSpriteShiftWrapper;}
declare module "fr.iglee42.createcasing.kubejs.wrappers.KJSCTTypeWrapper" {
import {$CTType} from "com.simibubi.create.foundation.block.connected.CTType"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $KJSCTTypeWrapper$$Interface {
}

export class $KJSCTTypeWrapper implements $KJSCTTypeWrapper$$Interface {
static readonly "VERTICAL": $CTType
static readonly "HORIZONTAL": $CTType
static readonly "OMNIDIRECTIONAL": $CTType

static "getCtType"(arg0: $ResourceLocation$$Type): $CTType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSCTTypeWrapper$$Type = ($KJSCTTypeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KJSCTTypeWrapper$$Original = $KJSCTTypeWrapper;}
declare module "fr.iglee42.createcasing.kubejs.builders.CasingSetBuilder" {
import {$CTSpriteShiftEntry$$Type} from "com.simibubi.create.foundation.block.connected.CTSpriteShiftEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PartialModel$$Type} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$SpriteShiftEntry$$Type} from "net.createmod.catnip.render.SpriteShiftEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $CasingSetBuilder {
 "sourceLine": $SourceLine

constructor(arg0: StringJS)

public "fluidPipe"(): $CasingSetBuilder
public "chainDrive"(): $CasingSetBuilder
public "chainGearshift"(): $CasingSetBuilder
public "encasedFan"(): $CasingSetBuilder
public "plough"(): $CasingSetBuilder
public "encasedWoodenShaft"(): $CasingSetBuilder
public "encasedWoodenCogwheel"(): $CasingSetBuilder
public "encasedWoodenLargeCogwheel"(): $CasingSetBuilder
public "portableStorageInterface"(): $CasingSetBuilder
public "simpleTransmissions"(arg0: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg1: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>): $CasingSetBuilder
public "existingCasing"(arg0: $ResourceLocation$$Type): $CasingSetBuilder
public "ctSprite"(arg0: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>): $CasingSetBuilder
public "encasedCustomTransmissionBlocks"(): $CasingSetBuilder
public "complexTransmissionBlocks"(arg0: $Supplier$$Type<($PartialModel$$Type)>, arg1: $Supplier$$Type<($PartialModel$$Type)>, arg2: $Supplier$$Type<($PartialModel$$Type)>): $CasingSetBuilder
public "processingBlocks"(arg0: $ResourceLocation$$Type): $CasingSetBuilder
public "contraptionBlocks"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $CasingSetBuilder
public "everythingExceptCasing"(arg0: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg1: $Supplier$$Type<($SpriteShiftEntry$$Type)>, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg5: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg6: $Supplier$$Type<($PartialModel$$Type)>, arg7: $Supplier$$Type<($PartialModel$$Type)>, arg8: $Supplier$$Type<($PartialModel$$Type)>, arg9: $ResourceLocation$$Type, arg10: $ResourceLocation$$Type, arg11: $ResourceLocation$$Type): $CasingSetBuilder
public "everything"(arg0: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg1: $Supplier$$Type<($SpriteShiftEntry$$Type)>, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg5: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg6: $Supplier$$Type<($PartialModel$$Type)>, arg7: $Supplier$$Type<($PartialModel$$Type)>, arg8: $Supplier$$Type<($PartialModel$$Type)>, arg9: $ResourceLocation$$Type, arg10: $ResourceLocation$$Type, arg11: $ResourceLocation$$Type): $CasingSetBuilder
public "largeCogwheel"(): $CasingSetBuilder
public "configurableGearbox"(): $CasingSetBuilder
public "chainConveyor"(arg0: $Supplier$$Type<($PartialModel$$Type)>, arg1: $Supplier$$Type<($PartialModel$$Type)>, arg2: $Supplier$$Type<($PartialModel$$Type)>): $CasingSetBuilder
public "casing"(): $CasingSetBuilder
public "shaft"(): $CasingSetBuilder
public "cogwheel"(arg0: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>, arg1: $Supplier$$Type<($CTSpriteShiftEntry$$Type)>): $CasingSetBuilder
public "depot"(): $CasingSetBuilder
public "roller"(arg0: $ResourceLocation$$Type): $CasingSetBuilder
public "harvester"(): $CasingSetBuilder
public "mixer"(arg0: $ResourceLocation$$Type): $CasingSetBuilder
public "belt"(arg0: $Supplier$$Type<($SpriteShiftEntry$$Type)>, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $CasingSetBuilder
public "clutch"(): $CasingSetBuilder
public "deployer"(): $CasingSetBuilder
public "drill"(arg0: $ResourceLocation$$Type): $CasingSetBuilder
public "gearbox"(): $CasingSetBuilder
public "gearshift"(): $CasingSetBuilder
public "saw"(): $CasingSetBuilder
public "fluids"(): $CasingSetBuilder
public "press"(): $CasingSetBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasingSetBuilder$$Type = ($CasingSetBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasingSetBuilder$$Original = $CasingSetBuilder;}
declare module "fr.iglee42.createcasing.kubejs.RegisterSetsEvent" {
import {$KubeStartupEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"
import {$List} from "java.util.List"
import {$CasingSetBuilder} from "fr.iglee42.createcasing.kubejs.builders.CasingSetBuilder"
import {$TransmissionSetBuilder} from "fr.iglee42.createcasing.kubejs.builders.TransmissionSetBuilder"

export class $RegisterSetsEvent implements $KubeStartupEvent$$Interface {
readonly "transmissionSets": $List<($TransmissionSetBuilder)>
readonly "casingSets": $List<($CasingSetBuilder)>

constructor()

public "createTransmission"(arg1: StringJS): $TransmissionSetBuilder
public "createCasing"(arg1: StringJS): $CasingSetBuilder
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterSetsEvent$$Type = ($RegisterSetsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterSetsEvent$$Original = $RegisterSetsEvent;}
declare module "fr.iglee42.createcasing.kubejs.builders.TransmissionSetBuilder" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $TransmissionSetBuilder {
 "sourceLine": $SourceLine

constructor(arg0: StringJS)

public "everything"(arg0: $Supplier$$Type<($Item$$Type)>): $TransmissionSetBuilder
public "largeCogwheel"(): $TransmissionSetBuilder
public "notEncasable"(): $TransmissionSetBuilder
public "shaft"(): $TransmissionSetBuilder
public "cogwheel"(): $TransmissionSetBuilder
public "item"(arg0: $Supplier$$Type<($Item$$Type)>): $TransmissionSetBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmissionSetBuilder$$Type = ($TransmissionSetBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransmissionSetBuilder$$Original = $TransmissionSetBuilder;}
