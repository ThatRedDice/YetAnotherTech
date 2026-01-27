declare module "mcjty.rftoolsbase.modules.crafting.items.CraftingCardItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$ItemStackList, $ItemStackList$$Type} from "mcjty.lib.varia.ItemStackList"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $CraftingCardItem extends $Item implements $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getIngredients"(arg0: $ItemStack$$Type): $List<($Ingredient)>
public static "getStacksFromItem"(arg0: $ItemStack$$Type): $ItemStackList
public static "putStacksInItem"(arg0: $ItemStack$$Type, arg1: $ItemStackList$$Type): void
public "getManualEntry"(): $ManualEntry
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $RecipeType$$Type<(never)>): $Recipe
public static "testRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): void
public static "fitsGrid"(arg0: $ItemStack$$Type): boolean
public static "getIngredientsGrid"(arg0: $ItemStack$$Type): $List<($Ingredient)>
public static "getIngredientStacks"(arg0: $ItemStack$$Type): $List<($ItemStack)>
public static "getResult"(arg0: $ItemStack$$Type): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxWidth"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCardItem$$Type = ($CraftingCardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingCardItem$$Original = $CraftingCardItem;}
