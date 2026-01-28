declare module "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockTransformationUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeWrapper"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$ChippedRecipe, $ChippedRecipe$$Type} from "earth.terrarium.chipped.common.recipes.ChippedRecipe"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $BlockTransformationUpgradeItem extends $UpgradeItemBase<($BlockTransformationUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($RecipeType$$Type<($ChippedRecipe$$Type)>)>, arg1: $IUpgradeCountLimitConfig$$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getRecipeType"(): $RecipeType<($ChippedRecipe)>
public "getType"(): $UpgradeType<($BlockTransformationUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "recipeType"(): $RecipeType<($ChippedRecipe)>
get "type"(): $UpgradeType<($BlockTransformationUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTransformationUpgradeItem$$Type = ($BlockTransformationUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTransformationUpgradeItem$$Original = $BlockTransformationUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockTransformationUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeItem"
import {$Optional} from "java.util.Optional"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$SimpleItemContent} from "net.p3pp3rf1y.sophisticatedcore.util.SimpleItemContent"
import {$ChippedRecipe} from "earth.terrarium.chipped.common.recipes.ChippedRecipe"

export class $BlockTransformationUpgradeWrapper extends $UpgradeWrapperBase<($BlockTransformationUpgradeWrapper), ($BlockTransformationUpgradeItem)> {
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
public "getRecipeType"(): $RecipeType<($ChippedRecipe)>
public "getInputInventory"(): $IItemHandlerModifiable
public "setResult"(arg0: $ItemStack$$Type): void
public "getResult"(): $Optional<($SimpleItemContent)>
set "shiftClickIntoStorage"(value: boolean)
get "recipeType"(): $RecipeType<($ChippedRecipe)>
get "inputInventory"(): $IItemHandlerModifiable
set "result"(value: $ItemStack$$Type)
get "result"(): $Optional<($SimpleItemContent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTransformationUpgradeWrapper$$Type = ($BlockTransformationUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTransformationUpgradeWrapper$$Original = $BlockTransformationUpgradeWrapper;}
