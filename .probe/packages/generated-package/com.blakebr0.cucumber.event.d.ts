declare module "com.blakebr0.cucumber.event.RecipeManagerLoadingEvent" {
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"

export class $RecipeManagerLoadingEvent extends $Event {
constructor(arg0: $RecipeManager$$Type, arg1: $List$$Type<($RecipeHolder$$Type<(never)>)>)

public "addRecipe"(arg0: $RecipeHolder$$Type<(never)>): void
public "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerLoadingEvent$$Type = ($RecipeManagerLoadingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManagerLoadingEvent$$Original = $RecipeManagerLoadingEvent;}
declare module "com.blakebr0.cucumber.event.RecipeManagerLoadedEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"

export class $RecipeManagerLoadedEvent extends $Event {
constructor(arg0: $RecipeManager$$Type)

public "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerLoadedEvent$$Type = ($RecipeManagerLoadedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManagerLoadedEvent$$Original = $RecipeManagerLoadedEvent;}
declare module "com.blakebr0.cucumber.event.ScytheHarvestCropEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ScytheHarvestCropEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemStack$$Type, arg4: $Player$$Type)

public "getLevel"(): $LevelAccessor
public "getState"(): $BlockState
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $LevelAccessor
get "state"(): $BlockState
get "itemStack"(): $ItemStack
get "player"(): $Player
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScytheHarvestCropEvent$$Type = ($ScytheHarvestCropEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScytheHarvestCropEvent$$Original = $ScytheHarvestCropEvent;}
declare module "com.blakebr0.cucumber.event.ItemBreakEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $ItemBreakEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: $ServerLevel$$Type, arg3: $LivingEntity$$Type)

public "getItem"(): $Item
public "getLevel"(): $ServerLevel
public "getEntity"(): $LivingEntity
public "getItemStack"(): $ItemStack
public "getAmount"(): integer
get "item"(): $Item
get "level"(): $ServerLevel
get "entity"(): $LivingEntity
get "itemStack"(): $ItemStack
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBreakEvent$$Type = ($ItemBreakEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBreakEvent$$Original = $ItemBreakEvent;}
