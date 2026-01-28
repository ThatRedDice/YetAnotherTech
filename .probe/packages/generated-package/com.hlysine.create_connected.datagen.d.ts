declare module "com.hlysine.create_connected.datagen.advancements.SimpleCCTrigger" {
import {$CriterionTriggerBase} from "com.hlysine.create_connected.datagen.advancements.CriterionTriggerBase"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SimpleCCTrigger$Instance} from "com.hlysine.create_connected.datagen.advancements.SimpleCCTrigger$Instance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SimpleCCTrigger extends $CriterionTriggerBase<($SimpleCCTrigger$Instance)> {
constructor(arg0: StringJS)

public "trigger"(arg0: $ServerPlayer$$Type): void
public "instance"(): $SimpleCCTrigger$Instance
public "codec"(): $Codec<($SimpleCCTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCCTrigger$$Type = ($SimpleCCTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCCTrigger$$Original = $SimpleCCTrigger;}
declare module "com.hlysine.create_connected.datagen.advancements.SimpleCCTrigger$Instance" {
import {$CriterionTriggerBase$Instance} from "com.hlysine.create_connected.datagen.advancements.CriterionTriggerBase$Instance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"

export class $SimpleCCTrigger$Instance extends $CriterionTriggerBase$Instance {
constructor()
constructor(arg0: ($ContextAwarePredicate$$Type)?)

public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCCTrigger$Instance$$Type = ($SimpleCCTrigger$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCCTrigger$Instance$$Original = $SimpleCCTrigger$Instance;}
declare module "com.hlysine.create_connected.datagen.advancements.CriterionTriggerBase" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTriggerBase$Instance, $CriterionTriggerBase$Instance$$Type} from "com.hlysine.create_connected.datagen.advancements.CriterionTriggerBase$Instance"
import {$CriterionTrigger$$Interface} from "net.minecraft.advancements.CriterionTrigger"

export class $CriterionTriggerBase<T extends $CriterionTriggerBase$Instance> implements $CriterionTrigger$$Interface<(T)> {
constructor(arg0: StringJS)

public "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
public "getId"(): $ResourceLocation
public "createCriterion"(arg0: T): $Criterion<(T)>
public "codec"(): $Codec<(T)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTriggerBase$$Type<T> = ($CriterionTriggerBase<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTriggerBase$$Original<T> = $CriterionTriggerBase<(T)>;}
declare module "com.hlysine.create_connected.datagen.advancements.CriterionTriggerBase$Instance" {
import {$ContextAwarePredicate} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $CriterionTriggerBase$Instance implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
constructor()

public "validate"(arg0: $CriterionValidator$$Type): void
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTriggerBase$Instance$$Type = ($CriterionTriggerBase$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTriggerBase$Instance$$Original = $CriterionTriggerBase$Instance;}
