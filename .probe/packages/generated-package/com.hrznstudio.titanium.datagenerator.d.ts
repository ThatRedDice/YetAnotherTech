declare module "com.hrznstudio.titanium.datagenerator.loot.block.IBlockLootTableProvider" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ILootTableProvider$$Interface} from "com.hrznstudio.titanium.datagenerator.loot.ILootTableProvider"

export interface $IBlockLootTableProvider$$Interface extends $ILootTableProvider$$Interface<($BasicBlockLootTables)> {

(arg0: $BasicBlockLootTables): $LootTable$Builder$$Type
}

export class $IBlockLootTableProvider implements $IBlockLootTableProvider$$Interface {
 "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockLootTableProvider$$Type = ((arg0: $BasicBlockLootTables) => $LootTable$Builder$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockLootTableProvider$$Original = $IBlockLootTableProvider;}
declare module "com.hrznstudio.titanium.datagenerator.loot.ILootTableProvider" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"

export interface $ILootTableProvider$$Interface<T> {

(arg0: T): $LootTable$Builder$$Type
}

export class $ILootTableProvider<T> implements $ILootTableProvider$$Interface {
 "getLootTable"(arg0: T): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootTableProvider$$Type<T> = ((arg0: T) => $LootTable$Builder$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILootTableProvider$$Original<T> = $ILootTableProvider<(T)>;}
declare module "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List$$Type} from "java.util.List"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockLootSubProvider} from "net.minecraft.data.loot.BlockLootSubProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicBlockLootTables extends $BlockLootSubProvider {
constructor(arg0: $Supplier$$Type<($List$$Type<($Block$$Type)>)>, arg1: $HolderLookup$Provider$$Type)

public "droppingSelf"(arg0: $ItemLike$$Type): $LootTable$Builder
public "droppingNothing"(): $LootTable$Builder
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlockLootTables$$Type = ($BasicBlockLootTables);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicBlockLootTables$$Original = $BasicBlockLootTables;}
