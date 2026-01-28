declare module "io.wispforest.accessories.criteria.AccessoryChangedCriterion$Conditions" {
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $AccessoryChangedCriterion$Conditions extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($AccessoryChangedCriterion$Conditions)>

constructor(player: ($ContextAwarePredicate$$Type)?, itemPredicates: ($List$$Type<($ItemPredicate$$Type)>)?, groups: ($List$$Type<(StringJS)>)?, slots: ($List$$Type<(StringJS)>)?, indices: ($List$$Type<(integer)>)?, cosmetic: (boolean)?)

public "itemPredicates"(): $Optional<($List<($ItemPredicate)>)>
public "indices"(): $Optional<($List<(integer)>)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "groups"(): $Optional<($List<(StringJS)>)>
public "slots"(): $Optional<($List<(StringJS)>)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "cosmetic"(): $Optional<(boolean)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryChangedCriterion$Conditions$$Type = ({"indices"?: ($List$$Type<(integer)>)?, "cosmetic"?: (boolean)?, "slots"?: ($List$$Type<(StringJS)>)?, "player"?: ($ContextAwarePredicate$$Type)?, "itemPredicates"?: ($List$$Type<($ItemPredicate$$Type)>)?, "groups"?: ($List$$Type<(StringJS)>)?}) | ([indices?: ($List$$Type<(integer)>)?, cosmetic?: (boolean)?, slots?: ($List$$Type<(StringJS)>)?, player?: ($ContextAwarePredicate$$Type)?, itemPredicates?: ($List$$Type<($ItemPredicate$$Type)>)?, groups?: ($List$$Type<(StringJS)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryChangedCriterion$Conditions$$Original = $AccessoryChangedCriterion$Conditions;}
declare module "io.wispforest.accessories.criteria.AccessoryChangedCriterion" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AccessoryChangedCriterion$Conditions} from "io.wispforest.accessories.criteria.AccessoryChangedCriterion$Conditions"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryChangedCriterion extends $SimpleCriterionTrigger<($AccessoryChangedCriterion$Conditions)> {
constructor()

public "trigger"(player: $ServerPlayer$$Type, accessory: $ItemStack$$Type, reference: $SlotReference$$Type, cosmetic: boolean): void
public "codec"(): $Codec<($AccessoryChangedCriterion$Conditions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryChangedCriterion$$Type = ($AccessoryChangedCriterion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryChangedCriterion$$Original = $AccessoryChangedCriterion;}
