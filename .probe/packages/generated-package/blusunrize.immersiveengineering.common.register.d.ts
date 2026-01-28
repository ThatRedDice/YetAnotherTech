declare module "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry" {
import {$IEBlocks$BlockEntry, $IEBlocks$BlockEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEBlocks$BlockEntry"
import {$IEFluid, $IEFluid$$Type} from "blusunrize.immersiveengineering.common.fluids.IEFluid"
import {$List, $List$$Type} from "java.util.List"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BucketItem, $BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IEFluidBlock, $IEFluidBlock$$Type} from "blusunrize.immersiveengineering.common.fluids.IEFluidBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$Record} from "java.lang.Record"

export class $IEFluids$FluidEntry extends $Record {
constructor(flowing: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, flowingTexture: $ResourceLocation$$Type, still: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, stillTexture: $ResourceLocation$$Type, block: $IEBlocks$BlockEntry$$Type<($IEFluidBlock$$Type)>, bucket: $DeferredHolder$$Type<($Item$$Type), ($BucketItem$$Type)>, type: $Holder$$Type<($FluidType)>, properties: $List$$Type<($Property$$Type<(never)>)>)

public "flowing"(): $DeferredHolder<($Fluid), ($IEFluid)>
public "still"(): $DeferredHolder<($Fluid), ($IEFluid)>
public "stillTexture"(): $ResourceLocation
public "flowingTexture"(): $ResourceLocation
public "getFlowing"(): $IEFluid
public "getStill"(): $IEFluid
public "getStillGetter"(): $DeferredHolder<($Fluid), ($IEFluid)>
public "bucket"(): $DeferredHolder<($Item), ($BucketItem)>
public "getBlock"(): $IEFluidBlock
public "type"(): $Holder<($FluidType)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $List<($Property<(never)>)>
public "block"(): $IEBlocks$BlockEntry<($IEFluidBlock)>
public "getBucket"(): $BucketItem
get "stillGetter"(): $DeferredHolder<($Fluid), ($IEFluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluids$FluidEntry$$Type = ({"block"?: $IEBlocks$BlockEntry$$Type<($IEFluidBlock$$Type)>, "stillTexture"?: $ResourceLocation$$Type, "flowing"?: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, "properties"?: $List$$Type<($Property$$Type<(never)>)>, "flowingTexture"?: $ResourceLocation$$Type, "still"?: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, "bucket"?: $DeferredHolder$$Type<($Item$$Type), ($BucketItem$$Type)>, "type"?: $Holder$$Type<($FluidType)>}) | ([block?: $IEBlocks$BlockEntry$$Type<($IEFluidBlock$$Type)>, stillTexture?: $ResourceLocation$$Type, flowing?: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, properties?: $List$$Type<($Property$$Type<(never)>)>, flowingTexture?: $ResourceLocation$$Type, still?: $DeferredHolder$$Type<($Fluid$$Type), ($IEFluid$$Type)>, bucket?: $DeferredHolder$$Type<($Item$$Type), ($BucketItem$$Type)>, type?: $Holder$$Type<($FluidType)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEFluids$FluidEntry$$Original = $IEFluids$FluidEntry;}
declare module "blusunrize.immersiveengineering.common.register.IEPotions$IEPotion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $IEPotions$IEPotion extends $MobEffect {
readonly "showInHud": boolean
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
readonly "showInInventory": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: integer, arg5: boolean, arg6: boolean)

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEPotions$IEPotion$$Type = ($IEPotions$IEPotion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEPotions$IEPotion$$Original = $IEPotions$IEPotion;}
declare module "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer" {
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$IEContainerMenu} from "blusunrize.immersiveengineering.common.gui.IEContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export class $IEMenuTypes$ArgContainer<T, C extends $IEContainerMenu> {
public "getType"(): $MenuType<(C)>
public "create"(arg0: integer, arg1: $Inventory$$Type, arg2: T): C
public "provide"(arg0: T): $MenuProvider
get "type"(): $MenuType<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMenuTypes$ArgContainer$$Type<T, C> = ($IEMenuTypes$ArgContainer<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMenuTypes$ArgContainer$$Original<T, C> = $IEMenuTypes$ArgContainer<(T), (C)>;}
declare module "blusunrize.immersiveengineering.common.register.IEBlocks$BlockEntry" {
import {$Collection} from "java.util.Collection"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PostBlock} from "blusunrize.immersiveengineering.common.blocks.generic.PostBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock} from "net.minecraft.world.level.block.FenceBlock"
import {$WallmountBlock} from "blusunrize.immersiveengineering.common.blocks.generic.WallmountBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$Function$$Type} from "java.util.function.Function"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$ScaffoldingBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ScaffoldingBlock"
import {$IEBaseBlock, $IEBaseBlock$$Type} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $IEBlocks$BlockEntry<T extends $Block> implements $Supplier$$Interface<(T)>, $ItemLike$$Interface {
static readonly "ALL_ENTRIES": $Collection<($IEBlocks$BlockEntry<(never)>)>

constructor(arg0: T)
constructor(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>, arg2: $Function$$Type<($BlockBehaviour$Properties), (T)>)
constructor(arg0: $IEBlocks$BlockEntry$$Type<(T)>)

public static "barrel"(arg0: StringJS, arg1: boolean): $IEBlocks$BlockEntry<($IEEntityBlock<(never)>)>
public static "scaffolding"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>): $IEBlocks$BlockEntry<($ScaffoldingBlock)>
public "asItem"(): $Item
public static "wallmount"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>): $IEBlocks$BlockEntry<($WallmountBlock)>
public static "post"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>): $IEBlocks$BlockEntry<($PostBlock)>
public "get"(): any
public "getProperties"(): $BlockBehaviour$Properties
public "getId"(): $ResourceLocation
public static "fence"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>): $IEBlocks$BlockEntry<($FenceBlock)>
public static "simple"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>, arg2: $Consumer$$Type<($IEBaseBlock)>): $IEBlocks$BlockEntry<($IEBaseBlock)>
public static "simple"(arg0: StringJS, arg1: $Supplier$$Type<($BlockBehaviour$Properties$$Type)>): $IEBlocks$BlockEntry<($IEBaseBlock)>
public "defaultBlockState"(): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlocks$BlockEntry$$Type<T> = ($IEBlocks$BlockEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlocks$BlockEntry$$Original<T> = $IEBlocks$BlockEntry<(T)>;}
