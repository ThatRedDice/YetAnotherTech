declare module "com.almostreliable.unified.api.unification.UnificationEntry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export interface $UnificationEntry$$Interface<T> {
}

export class $UnificationEntry<T> implements $UnificationEntry$$Interface {
 "asHolderOrThrow"(): $Holder$Reference<(T)>
 "tag"(): $TagKey<(T)>
 "value"(): T
 "id"(): $ResourceLocation
 "key"(): $ResourceKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnificationEntry$$Type<T> = ($UnificationEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnificationEntry$$Original<T> = $UnificationEntry<(T)>;}
declare module "com.almostreliable.unified.api.unification.UnificationLookup" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$UnificationEntry, $UnificationEntry$$Type} from "com.almostreliable.unified.api.unification.UnificationEntry"

export interface $UnificationLookup$$Interface {
get "tags"(): $Collection<($TagKey<($Item)>)>
}

export class $UnificationLookup implements $UnificationLookup$$Interface {
 "getTagEntries"(arg0: $TagKey$$Type<($Item)>): $Collection<($UnificationEntry<($Item)>)>
 "getRelevantItemTag"(item: $Item$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(arg0: $ResourceLocation$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(item: $Holder$$Type<($Item)>): $TagKey<($Item)>
 "getTagTargetItem"(arg0: $TagKey$$Type<($Item)>, arg1: $Predicate$$Type<($ResourceLocation)>): $UnificationEntry<($Item)>
 "getTagTargetItem"(tag: $TagKey$$Type<($Item)>): $UnificationEntry<($Item)>
 "isUnifiedIngredientItem"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): boolean
 "getVariantItemTarget"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $UnificationEntry$$Type<($Item$$Type)>): $UnificationEntry<($Item)>
 "getVariantItemTarget"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
 "getItemEntry"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getTags"(): $Collection<($TagKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnificationLookup$$Type = ($UnificationLookup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnificationLookup$$Original = $UnificationLookup;}
