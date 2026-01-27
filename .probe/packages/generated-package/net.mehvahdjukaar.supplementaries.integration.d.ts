declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.SpeakerBlockDisplayTarget" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$List$$Type} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$DisplayTarget} from "com.simibubi.create.api.behaviour.display.DisplayTarget"

export class $SpeakerBlockDisplayTarget extends $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public "provideStats"(context: $DisplayLinkContext$$Type): $DisplayTargetStats
public "acceptText"(line: integer, text: $List$$Type<($MutableComponent$$Type)>, context: $DisplayLinkContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlockDisplayTarget$$Type = ($SpeakerBlockDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpeakerBlockDisplayTarget$$Original = $SpeakerBlockDisplayTarget;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.FluidFillLevelDisplaySource" {
import {$ModularGuiLineBuilder$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$PercentOrProgressBarDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.PercentOrProgressBarDisplaySource"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $FluidFillLevelDisplaySource extends $PercentOrProgressBarDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "initConfigurationWidgets"(context: $DisplayLinkContext$$Type, builder: $ModularGuiLineBuilder$$Type, isFirstLine: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFillLevelDisplaySource$$Type = ($FluidFillLevelDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidFillLevelDisplaySource$$Original = $FluidFillLevelDisplaySource;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.NoticeBoardDisplayTarget" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$List$$Type} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DisplayTarget} from "com.simibubi.create.api.behaviour.display.DisplayTarget"

export class $NoticeBoardDisplayTarget extends $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public "provideStats"(context: $DisplayLinkContext$$Type): $DisplayTargetStats
public "acceptText"(line: integer, text: $List$$Type<($MutableComponent$$Type)>, context: $DisplayLinkContext$$Type): void
public "getLineOptionText"(line: integer): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoticeBoardDisplayTarget$$Type = ($NoticeBoardDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoticeBoardDisplayTarget$$Original = $NoticeBoardDisplayTarget;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.NoticeBoardDisplaySource" {
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $NoticeBoardDisplaySource extends $SingleLineDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoticeBoardDisplaySource$$Type = ($NoticeBoardDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoticeBoardDisplaySource$$Original = $NoticeBoardDisplaySource;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.BlackboardDisplayTarget" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$List$$Type} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$DisplayTarget} from "com.simibubi.create.api.behaviour.display.DisplayTarget"

export class $BlackboardDisplayTarget extends $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public "provideStats"(context: $DisplayLinkContext$$Type): $DisplayTargetStats
public "acceptText"(line: integer, text: $List$$Type<($MutableComponent$$Type)>, context: $DisplayLinkContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardDisplayTarget$$Type = ($BlackboardDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackboardDisplayTarget$$Original = $BlackboardDisplayTarget;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.GlobeDisplaySource" {
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $GlobeDisplaySource extends $SingleLineDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $MutableComponent
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobeDisplaySource$$Type = ($GlobeDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobeDisplaySource$$Original = $GlobeDisplaySource;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.ItemDisplayDisplaySource" {
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $ItemDisplayDisplaySource extends $SingleLineDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "getPassiveRefreshTicks"(): integer
get "passiveRefreshTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplayDisplaySource$$Type = ($ItemDisplayDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplayDisplaySource$$Original = $ItemDisplayDisplaySource;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.PresentRecipientAttribute$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAttribute} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttribute"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ItemAttributeType$$Interface} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttributeType"

export class $PresentRecipientAttribute$Type implements $ItemAttributeType$$Interface {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttribute)>
public "getAllAttributes"(itemStack: $ItemStack$$Type, level: $Level$$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
public "codec"(): $MapCodec<($ItemAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentRecipientAttribute$Type$$Type = ($PresentRecipientAttribute$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresentRecipientAttribute$Type$$Original = $PresentRecipientAttribute$Type;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.ClockDisplaySource" {
import {$ModularGuiLineBuilder$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $ClockDisplaySource extends $SingleLineDisplaySource {
static readonly "EMPTY_TIME": $MutableComponent
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "initConfigurationWidgets"(context: $DisplayLinkContext$$Type, builder: $ModularGuiLineBuilder$$Type, isFirstLine: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockDisplaySource$$Type = ($ClockDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClockDisplaySource$$Original = $ClockDisplaySource;}
declare module "net.mehvahdjukaar.supplementaries.integration.neoforge.create.TextHolderDisplayTarget" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$List$$Type} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$DisplayTarget} from "com.simibubi.create.api.behaviour.display.DisplayTarget"

export class $TextHolderDisplayTarget extends $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public "provideStats"(context: $DisplayLinkContext$$Type): $DisplayTargetStats
public "acceptText"(line: integer, text: $List$$Type<($MutableComponent$$Type)>, context: $DisplayLinkContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextHolderDisplayTarget$$Type = ($TextHolderDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextHolderDisplayTarget$$Original = $TextHolderDisplayTarget;}
