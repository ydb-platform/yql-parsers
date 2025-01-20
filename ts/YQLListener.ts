// Generated from YQL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { Sql_queryContext } from "./YQLParser";
import { Sql_stmt_listContext } from "./YQLParser";
import { Ansi_sql_stmt_listContext } from "./YQLParser";
import { Lambda_bodyContext } from "./YQLParser";
import { Lambda_stmtContext } from "./YQLParser";
import { Sql_stmtContext } from "./YQLParser";
import { Sql_stmt_coreContext } from "./YQLParser";
import { ExprContext } from "./YQLParser";
import { Or_subexprContext } from "./YQLParser";
import { And_subexprContext } from "./YQLParser";
import { Xor_subexprContext } from "./YQLParser";
import { Distinct_from_opContext } from "./YQLParser";
import { Cond_exprContext } from "./YQLParser";
import { Match_opContext } from "./YQLParser";
import { Eq_subexprContext } from "./YQLParser";
import { Shift_rightContext } from "./YQLParser";
import { Rot_rightContext } from "./YQLParser";
import { Double_questionContext } from "./YQLParser";
import { Neq_subexprContext } from "./YQLParser";
import { Bit_subexprContext } from "./YQLParser";
import { Add_subexprContext } from "./YQLParser";
import { Mul_subexprContext } from "./YQLParser";
import { Con_subexprContext } from "./YQLParser";
import { Unary_opContext } from "./YQLParser";
import { Unary_subexpr_suffixContext } from "./YQLParser";
import { Unary_casual_subexprContext } from "./YQLParser";
import { In_unary_casual_subexprContext } from "./YQLParser";
import { Unary_subexprContext } from "./YQLParser";
import { In_unary_subexprContext } from "./YQLParser";
import { List_literalContext } from "./YQLParser";
import { Expr_dict_listContext } from "./YQLParser";
import { Dict_literalContext } from "./YQLParser";
import { Expr_struct_listContext } from "./YQLParser";
import { Struct_literalContext } from "./YQLParser";
import { Atom_exprContext } from "./YQLParser";
import { In_atom_exprContext } from "./YQLParser";
import { Cast_exprContext } from "./YQLParser";
import { Bitcast_exprContext } from "./YQLParser";
import { Exists_exprContext } from "./YQLParser";
import { Case_exprContext } from "./YQLParser";
import { LambdaContext } from "./YQLParser";
import { In_exprContext } from "./YQLParser";
import { Json_api_exprContext } from "./YQLParser";
import { Jsonpath_specContext } from "./YQLParser";
import { Json_variable_nameContext } from "./YQLParser";
import { Json_variableContext } from "./YQLParser";
import { Json_variablesContext } from "./YQLParser";
import { Json_common_argsContext } from "./YQLParser";
import { Json_case_handlerContext } from "./YQLParser";
import { Json_valueContext } from "./YQLParser";
import { Json_exists_handlerContext } from "./YQLParser";
import { Json_existsContext } from "./YQLParser";
import { Json_query_wrapperContext } from "./YQLParser";
import { Json_query_handlerContext } from "./YQLParser";
import { Json_queryContext } from "./YQLParser";
import { Smart_parenthesisContext } from "./YQLParser";
import { Expr_listContext } from "./YQLParser";
import { Pure_column_listContext } from "./YQLParser";
import { Pure_column_or_namedContext } from "./YQLParser";
import { Pure_column_or_named_listContext } from "./YQLParser";
import { Column_nameContext } from "./YQLParser";
import { Without_column_nameContext } from "./YQLParser";
import { Column_listContext } from "./YQLParser";
import { Without_column_listContext } from "./YQLParser";
import { Named_exprContext } from "./YQLParser";
import { Named_expr_listContext } from "./YQLParser";
import { Invoke_exprContext } from "./YQLParser";
import { Invoke_expr_tailContext } from "./YQLParser";
import { Using_call_exprContext } from "./YQLParser";
import { Key_exprContext } from "./YQLParser";
import { When_exprContext } from "./YQLParser";
import { Literal_valueContext } from "./YQLParser";
import { Bind_parameterContext } from "./YQLParser";
import { Opt_bind_parameterContext } from "./YQLParser";
import { Bind_parameter_listContext } from "./YQLParser";
import { Named_bind_parameterContext } from "./YQLParser";
import { Named_bind_parameter_listContext } from "./YQLParser";
import { Signed_numberContext } from "./YQLParser";
import { Type_name_simpleContext } from "./YQLParser";
import { Integer_or_bindContext } from "./YQLParser";
import { Type_name_tagContext } from "./YQLParser";
import { Struct_argContext } from "./YQLParser";
import { Struct_arg_positionalContext } from "./YQLParser";
import { Variant_argContext } from "./YQLParser";
import { Callable_argContext } from "./YQLParser";
import { Callable_arg_listContext } from "./YQLParser";
import { Type_name_decimalContext } from "./YQLParser";
import { Type_name_optionalContext } from "./YQLParser";
import { Type_name_tupleContext } from "./YQLParser";
import { Type_name_structContext } from "./YQLParser";
import { Type_name_variantContext } from "./YQLParser";
import { Type_name_listContext } from "./YQLParser";
import { Type_name_streamContext } from "./YQLParser";
import { Type_name_flowContext } from "./YQLParser";
import { Type_name_dictContext } from "./YQLParser";
import { Type_name_setContext } from "./YQLParser";
import { Type_name_enumContext } from "./YQLParser";
import { Type_name_resourceContext } from "./YQLParser";
import { Type_name_taggedContext } from "./YQLParser";
import { Type_name_callableContext } from "./YQLParser";
import { Type_name_compositeContext } from "./YQLParser";
import { Type_nameContext } from "./YQLParser";
import { Type_name_or_bindContext } from "./YQLParser";
import { Value_constructor_literalContext } from "./YQLParser";
import { Value_constructorContext } from "./YQLParser";
import { Declare_stmtContext } from "./YQLParser";
import { Module_pathContext } from "./YQLParser";
import { Import_stmtContext } from "./YQLParser";
import { Export_stmtContext } from "./YQLParser";
import { Call_actionContext } from "./YQLParser";
import { Inline_actionContext } from "./YQLParser";
import { Do_stmtContext } from "./YQLParser";
import { Pragma_stmtContext } from "./YQLParser";
import { Pragma_valueContext } from "./YQLParser";
import { Sort_specificationContext } from "./YQLParser";
import { Sort_specification_listContext } from "./YQLParser";
import { Select_stmtContext } from "./YQLParser";
import { Select_unparenthesized_stmtContext } from "./YQLParser";
import { Select_kind_parenthesisContext } from "./YQLParser";
import { Select_opContext } from "./YQLParser";
import { Select_kind_partialContext } from "./YQLParser";
import { Select_kindContext } from "./YQLParser";
import { Process_coreContext } from "./YQLParser";
import { External_call_paramContext } from "./YQLParser";
import { External_call_settingsContext } from "./YQLParser";
import { Reduce_coreContext } from "./YQLParser";
import { Opt_set_quantifierContext } from "./YQLParser";
import { Select_coreContext } from "./YQLParser";
import { Row_pattern_recognition_clauseContext } from "./YQLParser";
import { Row_pattern_rows_per_matchContext } from "./YQLParser";
import { Row_pattern_empty_match_handlingContext } from "./YQLParser";
import { Row_pattern_measuresContext } from "./YQLParser";
import { Row_pattern_measure_listContext } from "./YQLParser";
import { Row_pattern_measure_definitionContext } from "./YQLParser";
import { Row_pattern_common_syntaxContext } from "./YQLParser";
import { Row_pattern_skip_toContext } from "./YQLParser";
import { Row_pattern_skip_to_variable_nameContext } from "./YQLParser";
import { Row_pattern_initial_or_seekContext } from "./YQLParser";
import { Row_patternContext } from "./YQLParser";
import { Row_pattern_termContext } from "./YQLParser";
import { Row_pattern_factorContext } from "./YQLParser";
import { Row_pattern_quantifierContext } from "./YQLParser";
import { Row_pattern_primaryContext } from "./YQLParser";
import { Row_pattern_primary_variable_nameContext } from "./YQLParser";
import { Row_pattern_permuteContext } from "./YQLParser";
import { Row_pattern_subset_clauseContext } from "./YQLParser";
import { Row_pattern_subset_listContext } from "./YQLParser";
import { Row_pattern_subset_itemContext } from "./YQLParser";
import { Row_pattern_subset_item_variable_nameContext } from "./YQLParser";
import { Row_pattern_subset_rhsContext } from "./YQLParser";
import { Row_pattern_subset_rhs_variable_nameContext } from "./YQLParser";
import { Row_pattern_definition_listContext } from "./YQLParser";
import { Row_pattern_definitionContext } from "./YQLParser";
import { Row_pattern_definition_variable_nameContext } from "./YQLParser";
import { Row_pattern_definition_search_conditionContext } from "./YQLParser";
import { Search_conditionContext } from "./YQLParser";
import { Row_pattern_variable_nameContext } from "./YQLParser";
import { Order_by_clauseContext } from "./YQLParser";
import { Ext_order_by_clauseContext } from "./YQLParser";
import { Group_by_clauseContext } from "./YQLParser";
import { Grouping_element_listContext } from "./YQLParser";
import { Grouping_elementContext } from "./YQLParser";
import { Ordinary_grouping_setContext } from "./YQLParser";
import { Ordinary_grouping_set_listContext } from "./YQLParser";
import { Rollup_listContext } from "./YQLParser";
import { Cube_listContext } from "./YQLParser";
import { Grouping_sets_specificationContext } from "./YQLParser";
import { Hopping_window_specificationContext } from "./YQLParser";
import { Result_columnContext } from "./YQLParser";
import { Join_sourceContext } from "./YQLParser";
import { Named_columnContext } from "./YQLParser";
import { Flatten_by_argContext } from "./YQLParser";
import { Flatten_sourceContext } from "./YQLParser";
import { Named_single_sourceContext } from "./YQLParser";
import { Single_sourceContext } from "./YQLParser";
import { Sample_clauseContext } from "./YQLParser";
import { Tablesample_clauseContext } from "./YQLParser";
import { Sampling_modeContext } from "./YQLParser";
import { Repeatable_clauseContext } from "./YQLParser";
import { Join_opContext } from "./YQLParser";
import { Join_constraintContext } from "./YQLParser";
import { Returning_columns_listContext } from "./YQLParser";
import { Into_table_stmtContext } from "./YQLParser";
import { Into_values_sourceContext } from "./YQLParser";
import { Values_stmtContext } from "./YQLParser";
import { Values_sourceContext } from "./YQLParser";
import { Values_source_row_listContext } from "./YQLParser";
import { Values_source_rowContext } from "./YQLParser";
import { Simple_values_sourceContext } from "./YQLParser";
import { Create_external_data_source_stmtContext } from "./YQLParser";
import { Alter_external_data_source_stmtContext } from "./YQLParser";
import { Alter_external_data_source_actionContext } from "./YQLParser";
import { Drop_external_data_source_stmtContext } from "./YQLParser";
import { Create_view_stmtContext } from "./YQLParser";
import { Drop_view_stmtContext } from "./YQLParser";
import { Upsert_object_stmtContext } from "./YQLParser";
import { Create_object_stmtContext } from "./YQLParser";
import { Create_object_featuresContext } from "./YQLParser";
import { Alter_object_stmtContext } from "./YQLParser";
import { Alter_object_featuresContext } from "./YQLParser";
import { Drop_object_stmtContext } from "./YQLParser";
import { Drop_object_featuresContext } from "./YQLParser";
import { Object_feature_valueContext } from "./YQLParser";
import { Object_feature_kvContext } from "./YQLParser";
import { Object_feature_flagContext } from "./YQLParser";
import { Object_featureContext } from "./YQLParser";
import { Object_featuresContext } from "./YQLParser";
import { Object_type_refContext } from "./YQLParser";
import { Create_table_stmtContext } from "./YQLParser";
import { Create_table_entryContext } from "./YQLParser";
import { Create_backup_collection_stmtContext } from "./YQLParser";
import { Alter_backup_collection_stmtContext } from "./YQLParser";
import { Drop_backup_collection_stmtContext } from "./YQLParser";
import { Create_backup_collection_entriesContext } from "./YQLParser";
import { Create_backup_collection_entries_manyContext } from "./YQLParser";
import { Table_listContext } from "./YQLParser";
import { Alter_backup_collection_actionsContext } from "./YQLParser";
import { Alter_backup_collection_actionContext } from "./YQLParser";
import { Alter_backup_collection_entriesContext } from "./YQLParser";
import { Alter_backup_collection_entryContext } from "./YQLParser";
import { Backup_collectionContext } from "./YQLParser";
import { Backup_collection_settingsContext } from "./YQLParser";
import { Backup_collection_settings_entryContext } from "./YQLParser";
import { Backup_stmtContext } from "./YQLParser";
import { Restore_stmtContext } from "./YQLParser";
import { Table_inheritsContext } from "./YQLParser";
import { Table_partition_byContext } from "./YQLParser";
import { With_table_settingsContext } from "./YQLParser";
import { Table_tablestoreContext } from "./YQLParser";
import { Table_settings_entryContext } from "./YQLParser";
import { Table_as_sourceContext } from "./YQLParser";
import { Alter_table_stmtContext } from "./YQLParser";
import { Alter_table_actionContext } from "./YQLParser";
import { Alter_external_table_stmtContext } from "./YQLParser";
import { Alter_external_table_actionContext } from "./YQLParser";
import { Alter_table_store_stmtContext } from "./YQLParser";
import { Alter_table_store_actionContext } from "./YQLParser";
import { Alter_table_add_columnContext } from "./YQLParser";
import { Alter_table_drop_columnContext } from "./YQLParser";
import { Alter_table_alter_columnContext } from "./YQLParser";
import { Alter_table_alter_column_drop_not_nullContext } from "./YQLParser";
import { Alter_table_add_column_familyContext } from "./YQLParser";
import { Alter_table_alter_column_familyContext } from "./YQLParser";
import { Alter_table_set_table_setting_uncompatContext } from "./YQLParser";
import { Alter_table_set_table_setting_compatContext } from "./YQLParser";
import { Alter_table_reset_table_settingContext } from "./YQLParser";
import { Alter_table_add_indexContext } from "./YQLParser";
import { Alter_table_drop_indexContext } from "./YQLParser";
import { Alter_table_rename_toContext } from "./YQLParser";
import { Alter_table_rename_index_toContext } from "./YQLParser";
import { Alter_table_add_changefeedContext } from "./YQLParser";
import { Alter_table_alter_changefeedContext } from "./YQLParser";
import { Alter_table_drop_changefeedContext } from "./YQLParser";
import { Alter_table_alter_indexContext } from "./YQLParser";
import { Column_schemaContext } from "./YQLParser";
import { Family_relationContext } from "./YQLParser";
import { Opt_column_constraintsContext } from "./YQLParser";
import { Column_order_by_specificationContext } from "./YQLParser";
import { Table_constraintContext } from "./YQLParser";
import { Table_indexContext } from "./YQLParser";
import { Table_index_typeContext } from "./YQLParser";
import { Global_indexContext } from "./YQLParser";
import { Local_indexContext } from "./YQLParser";
import { Index_subtypeContext } from "./YQLParser";
import { With_index_settingsContext } from "./YQLParser";
import { Index_setting_entryContext } from "./YQLParser";
import { Index_setting_valueContext } from "./YQLParser";
import { ChangefeedContext } from "./YQLParser";
import { Changefeed_settingsContext } from "./YQLParser";
import { Changefeed_settings_entryContext } from "./YQLParser";
import { Changefeed_setting_valueContext } from "./YQLParser";
import { Changefeed_alter_settingsContext } from "./YQLParser";
import { Alter_table_setting_entryContext } from "./YQLParser";
import { Table_setting_valueContext } from "./YQLParser";
import { Ttl_tier_listContext } from "./YQLParser";
import { Ttl_tier_actionContext } from "./YQLParser";
import { Family_entryContext } from "./YQLParser";
import { Family_settingsContext } from "./YQLParser";
import { Family_settings_entryContext } from "./YQLParser";
import { Family_setting_valueContext } from "./YQLParser";
import { Split_boundariesContext } from "./YQLParser";
import { Literal_value_listContext } from "./YQLParser";
import { Alter_table_alter_index_actionContext } from "./YQLParser";
import { Drop_table_stmtContext } from "./YQLParser";
import { Create_user_stmtContext } from "./YQLParser";
import { Alter_user_stmtContext } from "./YQLParser";
import { Create_group_stmtContext } from "./YQLParser";
import { Alter_group_stmtContext } from "./YQLParser";
import { Drop_role_stmtContext } from "./YQLParser";
import { Role_nameContext } from "./YQLParser";
import { Create_user_optionContext } from "./YQLParser";
import { Password_optionContext } from "./YQLParser";
import { Login_optionContext } from "./YQLParser";
import { Grant_permissions_stmtContext } from "./YQLParser";
import { Revoke_permissions_stmtContext } from "./YQLParser";
import { Permission_idContext } from "./YQLParser";
import { Permission_nameContext } from "./YQLParser";
import { Permission_name_targetContext } from "./YQLParser";
import { Create_resource_pool_stmtContext } from "./YQLParser";
import { Alter_resource_pool_stmtContext } from "./YQLParser";
import { Alter_resource_pool_actionContext } from "./YQLParser";
import { Drop_resource_pool_stmtContext } from "./YQLParser";
import { Create_resource_pool_classifier_stmtContext } from "./YQLParser";
import { Alter_resource_pool_classifier_stmtContext } from "./YQLParser";
import { Alter_resource_pool_classifier_actionContext } from "./YQLParser";
import { Drop_resource_pool_classifier_stmtContext } from "./YQLParser";
import { Create_replication_stmtContext } from "./YQLParser";
import { Replication_targetContext } from "./YQLParser";
import { Replication_settingsContext } from "./YQLParser";
import { Replication_settings_entryContext } from "./YQLParser";
import { Alter_replication_stmtContext } from "./YQLParser";
import { Alter_replication_actionContext } from "./YQLParser";
import { Alter_replication_set_settingContext } from "./YQLParser";
import { Drop_replication_stmtContext } from "./YQLParser";
import { Action_or_subquery_argsContext } from "./YQLParser";
import { Define_action_or_subquery_stmtContext } from "./YQLParser";
import { Define_action_or_subquery_bodyContext } from "./YQLParser";
import { If_stmtContext } from "./YQLParser";
import { For_stmtContext } from "./YQLParser";
import { Table_refContext } from "./YQLParser";
import { Table_keyContext } from "./YQLParser";
import { Table_argContext } from "./YQLParser";
import { Table_hintsContext } from "./YQLParser";
import { Table_hintContext } from "./YQLParser";
import { Object_refContext } from "./YQLParser";
import { Simple_table_ref_coreContext } from "./YQLParser";
import { Simple_table_refContext } from "./YQLParser";
import { Into_simple_table_refContext } from "./YQLParser";
import { Delete_stmtContext } from "./YQLParser";
import { Update_stmtContext } from "./YQLParser";
import { Set_clause_choiceContext } from "./YQLParser";
import { Set_clause_listContext } from "./YQLParser";
import { Set_clauseContext } from "./YQLParser";
import { Set_targetContext } from "./YQLParser";
import { Multiple_column_assignmentContext } from "./YQLParser";
import { Set_target_listContext } from "./YQLParser";
import { Create_topic_stmtContext } from "./YQLParser";
import { Create_topic_entriesContext } from "./YQLParser";
import { Create_topic_entryContext } from "./YQLParser";
import { With_topic_settingsContext } from "./YQLParser";
import { Alter_topic_stmtContext } from "./YQLParser";
import { Alter_topic_actionContext } from "./YQLParser";
import { Alter_topic_add_consumerContext } from "./YQLParser";
import { Topic_create_consumer_entryContext } from "./YQLParser";
import { Alter_topic_alter_consumerContext } from "./YQLParser";
import { Alter_topic_alter_consumer_entryContext } from "./YQLParser";
import { Alter_topic_drop_consumerContext } from "./YQLParser";
import { Topic_alter_consumer_setContext } from "./YQLParser";
import { Topic_alter_consumer_resetContext } from "./YQLParser";
import { Alter_topic_set_settingsContext } from "./YQLParser";
import { Alter_topic_reset_settingsContext } from "./YQLParser";
import { Drop_topic_stmtContext } from "./YQLParser";
import { Topic_settingsContext } from "./YQLParser";
import { Topic_settings_entryContext } from "./YQLParser";
import { Topic_setting_valueContext } from "./YQLParser";
import { Topic_consumer_with_settingsContext } from "./YQLParser";
import { Topic_consumer_settingsContext } from "./YQLParser";
import { Topic_consumer_settings_entryContext } from "./YQLParser";
import { Topic_consumer_setting_valueContext } from "./YQLParser";
import { Topic_refContext } from "./YQLParser";
import { Topic_consumer_refContext } from "./YQLParser";
import { Null_treatmentContext } from "./YQLParser";
import { Filter_clauseContext } from "./YQLParser";
import { Window_name_or_specificationContext } from "./YQLParser";
import { Window_nameContext } from "./YQLParser";
import { Window_clauseContext } from "./YQLParser";
import { Window_definition_listContext } from "./YQLParser";
import { Window_definitionContext } from "./YQLParser";
import { New_window_nameContext } from "./YQLParser";
import { Window_specificationContext } from "./YQLParser";
import { Window_specification_detailsContext } from "./YQLParser";
import { Existing_window_nameContext } from "./YQLParser";
import { Window_partition_clauseContext } from "./YQLParser";
import { Window_order_clauseContext } from "./YQLParser";
import { Window_frame_clauseContext } from "./YQLParser";
import { Window_frame_unitsContext } from "./YQLParser";
import { Window_frame_extentContext } from "./YQLParser";
import { Window_frame_betweenContext } from "./YQLParser";
import { Window_frame_boundContext } from "./YQLParser";
import { Window_frame_exclusionContext } from "./YQLParser";
import { Use_stmtContext } from "./YQLParser";
import { Subselect_stmtContext } from "./YQLParser";
import { Named_nodes_stmtContext } from "./YQLParser";
import { Commit_stmtContext } from "./YQLParser";
import { Rollback_stmtContext } from "./YQLParser";
import { Analyze_tableContext } from "./YQLParser";
import { Analyze_table_listContext } from "./YQLParser";
import { Analyze_stmtContext } from "./YQLParser";
import { Alter_sequence_stmtContext } from "./YQLParser";
import { Alter_sequence_actionContext } from "./YQLParser";
import { IdentifierContext } from "./YQLParser";
import { IdContext } from "./YQLParser";
import { Id_schemaContext } from "./YQLParser";
import { Id_exprContext } from "./YQLParser";
import { Id_expr_inContext } from "./YQLParser";
import { Id_windowContext } from "./YQLParser";
import { Id_tableContext } from "./YQLParser";
import { Id_withoutContext } from "./YQLParser";
import { Id_hintContext } from "./YQLParser";
import { Id_as_compatContext } from "./YQLParser";
import { An_idContext } from "./YQLParser";
import { An_id_or_typeContext } from "./YQLParser";
import { An_id_schemaContext } from "./YQLParser";
import { An_id_exprContext } from "./YQLParser";
import { An_id_expr_inContext } from "./YQLParser";
import { An_id_windowContext } from "./YQLParser";
import { An_id_tableContext } from "./YQLParser";
import { An_id_withoutContext } from "./YQLParser";
import { An_id_hintContext } from "./YQLParser";
import { An_id_pureContext } from "./YQLParser";
import { An_id_as_compatContext } from "./YQLParser";
import { View_nameContext } from "./YQLParser";
import { Opt_id_prefixContext } from "./YQLParser";
import { Cluster_exprContext } from "./YQLParser";
import { Id_or_typeContext } from "./YQLParser";
import { Opt_id_prefix_or_typeContext } from "./YQLParser";
import { Id_or_atContext } from "./YQLParser";
import { Id_table_or_typeContext } from "./YQLParser";
import { Id_table_or_atContext } from "./YQLParser";
import { KeywordContext } from "./YQLParser";
import { Keyword_expr_uncompatContext } from "./YQLParser";
import { Keyword_table_uncompatContext } from "./YQLParser";
import { Keyword_select_uncompatContext } from "./YQLParser";
import { Keyword_alter_uncompatContext } from "./YQLParser";
import { Keyword_in_uncompatContext } from "./YQLParser";
import { Keyword_window_uncompatContext } from "./YQLParser";
import { Keyword_hint_uncompatContext } from "./YQLParser";
import { Keyword_as_compatContext } from "./YQLParser";
import { Keyword_compatContext } from "./YQLParser";
import { Type_idContext } from "./YQLParser";
import { Bool_valueContext } from "./YQLParser";
import { RealContext } from "./YQLParser";
import { IntegerContext } from "./YQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `YQLParser`.
 */
export default class YQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `YQLParser.sql_query`.
	 * @param ctx the parse tree
	 */
	enterSql_query?: (ctx: Sql_queryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sql_query`.
	 * @param ctx the parse tree
	 */
	exitSql_query?: (ctx: Sql_queryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt_list?: (ctx: Sql_stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt_list?: (ctx: Sql_stmt_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ansi_sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	enterAnsi_sql_stmt_list?: (ctx: Ansi_sql_stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ansi_sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	exitAnsi_sql_stmt_list?: (ctx: Ansi_sql_stmt_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.lambda_body`.
	 * @param ctx the parse tree
	 */
	enterLambda_body?: (ctx: Lambda_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.lambda_body`.
	 * @param ctx the parse tree
	 */
	exitLambda_body?: (ctx: Lambda_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.lambda_stmt`.
	 * @param ctx the parse tree
	 */
	enterLambda_stmt?: (ctx: Lambda_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.lambda_stmt`.
	 * @param ctx the parse tree
	 */
	exitLambda_stmt?: (ctx: Lambda_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt?: (ctx: Sql_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt?: (ctx: Sql_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sql_stmt_core`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt_core?: (ctx: Sql_stmt_coreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sql_stmt_core`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt_core?: (ctx: Sql_stmt_coreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.or_subexpr`.
	 * @param ctx the parse tree
	 */
	enterOr_subexpr?: (ctx: Or_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.or_subexpr`.
	 * @param ctx the parse tree
	 */
	exitOr_subexpr?: (ctx: Or_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.and_subexpr`.
	 * @param ctx the parse tree
	 */
	enterAnd_subexpr?: (ctx: And_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.and_subexpr`.
	 * @param ctx the parse tree
	 */
	exitAnd_subexpr?: (ctx: And_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.xor_subexpr`.
	 * @param ctx the parse tree
	 */
	enterXor_subexpr?: (ctx: Xor_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.xor_subexpr`.
	 * @param ctx the parse tree
	 */
	exitXor_subexpr?: (ctx: Xor_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.distinct_from_op`.
	 * @param ctx the parse tree
	 */
	enterDistinct_from_op?: (ctx: Distinct_from_opContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.distinct_from_op`.
	 * @param ctx the parse tree
	 */
	exitDistinct_from_op?: (ctx: Distinct_from_opContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.cond_expr`.
	 * @param ctx the parse tree
	 */
	enterCond_expr?: (ctx: Cond_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.cond_expr`.
	 * @param ctx the parse tree
	 */
	exitCond_expr?: (ctx: Cond_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.match_op`.
	 * @param ctx the parse tree
	 */
	enterMatch_op?: (ctx: Match_opContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.match_op`.
	 * @param ctx the parse tree
	 */
	exitMatch_op?: (ctx: Match_opContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.eq_subexpr`.
	 * @param ctx the parse tree
	 */
	enterEq_subexpr?: (ctx: Eq_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.eq_subexpr`.
	 * @param ctx the parse tree
	 */
	exitEq_subexpr?: (ctx: Eq_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.shift_right`.
	 * @param ctx the parse tree
	 */
	enterShift_right?: (ctx: Shift_rightContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.shift_right`.
	 * @param ctx the parse tree
	 */
	exitShift_right?: (ctx: Shift_rightContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.rot_right`.
	 * @param ctx the parse tree
	 */
	enterRot_right?: (ctx: Rot_rightContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.rot_right`.
	 * @param ctx the parse tree
	 */
	exitRot_right?: (ctx: Rot_rightContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.double_question`.
	 * @param ctx the parse tree
	 */
	enterDouble_question?: (ctx: Double_questionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.double_question`.
	 * @param ctx the parse tree
	 */
	exitDouble_question?: (ctx: Double_questionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.neq_subexpr`.
	 * @param ctx the parse tree
	 */
	enterNeq_subexpr?: (ctx: Neq_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.neq_subexpr`.
	 * @param ctx the parse tree
	 */
	exitNeq_subexpr?: (ctx: Neq_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.bit_subexpr`.
	 * @param ctx the parse tree
	 */
	enterBit_subexpr?: (ctx: Bit_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.bit_subexpr`.
	 * @param ctx the parse tree
	 */
	exitBit_subexpr?: (ctx: Bit_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.add_subexpr`.
	 * @param ctx the parse tree
	 */
	enterAdd_subexpr?: (ctx: Add_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.add_subexpr`.
	 * @param ctx the parse tree
	 */
	exitAdd_subexpr?: (ctx: Add_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.mul_subexpr`.
	 * @param ctx the parse tree
	 */
	enterMul_subexpr?: (ctx: Mul_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.mul_subexpr`.
	 * @param ctx the parse tree
	 */
	exitMul_subexpr?: (ctx: Mul_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.con_subexpr`.
	 * @param ctx the parse tree
	 */
	enterCon_subexpr?: (ctx: Con_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.con_subexpr`.
	 * @param ctx the parse tree
	 */
	exitCon_subexpr?: (ctx: Con_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.unary_op`.
	 * @param ctx the parse tree
	 */
	enterUnary_op?: (ctx: Unary_opContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.unary_op`.
	 * @param ctx the parse tree
	 */
	exitUnary_op?: (ctx: Unary_opContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.unary_subexpr_suffix`.
	 * @param ctx the parse tree
	 */
	enterUnary_subexpr_suffix?: (ctx: Unary_subexpr_suffixContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.unary_subexpr_suffix`.
	 * @param ctx the parse tree
	 */
	exitUnary_subexpr_suffix?: (ctx: Unary_subexpr_suffixContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.unary_casual_subexpr`.
	 * @param ctx the parse tree
	 */
	enterUnary_casual_subexpr?: (ctx: Unary_casual_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.unary_casual_subexpr`.
	 * @param ctx the parse tree
	 */
	exitUnary_casual_subexpr?: (ctx: Unary_casual_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.in_unary_casual_subexpr`.
	 * @param ctx the parse tree
	 */
	enterIn_unary_casual_subexpr?: (ctx: In_unary_casual_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.in_unary_casual_subexpr`.
	 * @param ctx the parse tree
	 */
	exitIn_unary_casual_subexpr?: (ctx: In_unary_casual_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.unary_subexpr`.
	 * @param ctx the parse tree
	 */
	enterUnary_subexpr?: (ctx: Unary_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.unary_subexpr`.
	 * @param ctx the parse tree
	 */
	exitUnary_subexpr?: (ctx: Unary_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.in_unary_subexpr`.
	 * @param ctx the parse tree
	 */
	enterIn_unary_subexpr?: (ctx: In_unary_subexprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.in_unary_subexpr`.
	 * @param ctx the parse tree
	 */
	exitIn_unary_subexpr?: (ctx: In_unary_subexprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.list_literal`.
	 * @param ctx the parse tree
	 */
	enterList_literal?: (ctx: List_literalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.list_literal`.
	 * @param ctx the parse tree
	 */
	exitList_literal?: (ctx: List_literalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.expr_dict_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_dict_list?: (ctx: Expr_dict_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.expr_dict_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_dict_list?: (ctx: Expr_dict_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.dict_literal`.
	 * @param ctx the parse tree
	 */
	enterDict_literal?: (ctx: Dict_literalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.dict_literal`.
	 * @param ctx the parse tree
	 */
	exitDict_literal?: (ctx: Dict_literalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.expr_struct_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_struct_list?: (ctx: Expr_struct_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.expr_struct_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_struct_list?: (ctx: Expr_struct_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.struct_literal`.
	 * @param ctx the parse tree
	 */
	enterStruct_literal?: (ctx: Struct_literalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.struct_literal`.
	 * @param ctx the parse tree
	 */
	exitStruct_literal?: (ctx: Struct_literalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.atom_expr`.
	 * @param ctx the parse tree
	 */
	enterAtom_expr?: (ctx: Atom_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.atom_expr`.
	 * @param ctx the parse tree
	 */
	exitAtom_expr?: (ctx: Atom_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.in_atom_expr`.
	 * @param ctx the parse tree
	 */
	enterIn_atom_expr?: (ctx: In_atom_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.in_atom_expr`.
	 * @param ctx the parse tree
	 */
	exitIn_atom_expr?: (ctx: In_atom_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	enterCast_expr?: (ctx: Cast_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	exitCast_expr?: (ctx: Cast_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.bitcast_expr`.
	 * @param ctx the parse tree
	 */
	enterBitcast_expr?: (ctx: Bitcast_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.bitcast_expr`.
	 * @param ctx the parse tree
	 */
	exitBitcast_expr?: (ctx: Bitcast_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.exists_expr`.
	 * @param ctx the parse tree
	 */
	enterExists_expr?: (ctx: Exists_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.exists_expr`.
	 * @param ctx the parse tree
	 */
	exitExists_expr?: (ctx: Exists_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.case_expr`.
	 * @param ctx the parse tree
	 */
	enterCase_expr?: (ctx: Case_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.case_expr`.
	 * @param ctx the parse tree
	 */
	exitCase_expr?: (ctx: Case_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.in_expr`.
	 * @param ctx the parse tree
	 */
	enterIn_expr?: (ctx: In_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.in_expr`.
	 * @param ctx the parse tree
	 */
	exitIn_expr?: (ctx: In_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_api_expr`.
	 * @param ctx the parse tree
	 */
	enterJson_api_expr?: (ctx: Json_api_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_api_expr`.
	 * @param ctx the parse tree
	 */
	exitJson_api_expr?: (ctx: Json_api_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.jsonpath_spec`.
	 * @param ctx the parse tree
	 */
	enterJsonpath_spec?: (ctx: Jsonpath_specContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.jsonpath_spec`.
	 * @param ctx the parse tree
	 */
	exitJsonpath_spec?: (ctx: Jsonpath_specContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_variable_name`.
	 * @param ctx the parse tree
	 */
	enterJson_variable_name?: (ctx: Json_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_variable_name`.
	 * @param ctx the parse tree
	 */
	exitJson_variable_name?: (ctx: Json_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_variable`.
	 * @param ctx the parse tree
	 */
	enterJson_variable?: (ctx: Json_variableContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_variable`.
	 * @param ctx the parse tree
	 */
	exitJson_variable?: (ctx: Json_variableContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_variables`.
	 * @param ctx the parse tree
	 */
	enterJson_variables?: (ctx: Json_variablesContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_variables`.
	 * @param ctx the parse tree
	 */
	exitJson_variables?: (ctx: Json_variablesContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_common_args`.
	 * @param ctx the parse tree
	 */
	enterJson_common_args?: (ctx: Json_common_argsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_common_args`.
	 * @param ctx the parse tree
	 */
	exitJson_common_args?: (ctx: Json_common_argsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_case_handler`.
	 * @param ctx the parse tree
	 */
	enterJson_case_handler?: (ctx: Json_case_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_case_handler`.
	 * @param ctx the parse tree
	 */
	exitJson_case_handler?: (ctx: Json_case_handlerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_value`.
	 * @param ctx the parse tree
	 */
	enterJson_value?: (ctx: Json_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_value`.
	 * @param ctx the parse tree
	 */
	exitJson_value?: (ctx: Json_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_exists_handler`.
	 * @param ctx the parse tree
	 */
	enterJson_exists_handler?: (ctx: Json_exists_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_exists_handler`.
	 * @param ctx the parse tree
	 */
	exitJson_exists_handler?: (ctx: Json_exists_handlerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_exists`.
	 * @param ctx the parse tree
	 */
	enterJson_exists?: (ctx: Json_existsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_exists`.
	 * @param ctx the parse tree
	 */
	exitJson_exists?: (ctx: Json_existsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_query_wrapper`.
	 * @param ctx the parse tree
	 */
	enterJson_query_wrapper?: (ctx: Json_query_wrapperContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_query_wrapper`.
	 * @param ctx the parse tree
	 */
	exitJson_query_wrapper?: (ctx: Json_query_wrapperContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_query_handler`.
	 * @param ctx the parse tree
	 */
	enterJson_query_handler?: (ctx: Json_query_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_query_handler`.
	 * @param ctx the parse tree
	 */
	exitJson_query_handler?: (ctx: Json_query_handlerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.json_query`.
	 * @param ctx the parse tree
	 */
	enterJson_query?: (ctx: Json_queryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.json_query`.
	 * @param ctx the parse tree
	 */
	exitJson_query?: (ctx: Json_queryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.smart_parenthesis`.
	 * @param ctx the parse tree
	 */
	enterSmart_parenthesis?: (ctx: Smart_parenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.smart_parenthesis`.
	 * @param ctx the parse tree
	 */
	exitSmart_parenthesis?: (ctx: Smart_parenthesisContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.expr_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.expr_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.pure_column_list`.
	 * @param ctx the parse tree
	 */
	enterPure_column_list?: (ctx: Pure_column_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.pure_column_list`.
	 * @param ctx the parse tree
	 */
	exitPure_column_list?: (ctx: Pure_column_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.pure_column_or_named`.
	 * @param ctx the parse tree
	 */
	enterPure_column_or_named?: (ctx: Pure_column_or_namedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.pure_column_or_named`.
	 * @param ctx the parse tree
	 */
	exitPure_column_or_named?: (ctx: Pure_column_or_namedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.pure_column_or_named_list`.
	 * @param ctx the parse tree
	 */
	enterPure_column_or_named_list?: (ctx: Pure_column_or_named_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.pure_column_or_named_list`.
	 * @param ctx the parse tree
	 */
	exitPure_column_or_named_list?: (ctx: Pure_column_or_named_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.without_column_name`.
	 * @param ctx the parse tree
	 */
	enterWithout_column_name?: (ctx: Without_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.without_column_name`.
	 * @param ctx the parse tree
	 */
	exitWithout_column_name?: (ctx: Without_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.column_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_list?: (ctx: Column_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.column_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_list?: (ctx: Column_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.without_column_list`.
	 * @param ctx the parse tree
	 */
	enterWithout_column_list?: (ctx: Without_column_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.without_column_list`.
	 * @param ctx the parse tree
	 */
	exitWithout_column_list?: (ctx: Without_column_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_expr`.
	 * @param ctx the parse tree
	 */
	enterNamed_expr?: (ctx: Named_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_expr`.
	 * @param ctx the parse tree
	 */
	exitNamed_expr?: (ctx: Named_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_expr_list`.
	 * @param ctx the parse tree
	 */
	enterNamed_expr_list?: (ctx: Named_expr_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_expr_list`.
	 * @param ctx the parse tree
	 */
	exitNamed_expr_list?: (ctx: Named_expr_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.invoke_expr`.
	 * @param ctx the parse tree
	 */
	enterInvoke_expr?: (ctx: Invoke_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.invoke_expr`.
	 * @param ctx the parse tree
	 */
	exitInvoke_expr?: (ctx: Invoke_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.invoke_expr_tail`.
	 * @param ctx the parse tree
	 */
	enterInvoke_expr_tail?: (ctx: Invoke_expr_tailContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.invoke_expr_tail`.
	 * @param ctx the parse tree
	 */
	exitInvoke_expr_tail?: (ctx: Invoke_expr_tailContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.using_call_expr`.
	 * @param ctx the parse tree
	 */
	enterUsing_call_expr?: (ctx: Using_call_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.using_call_expr`.
	 * @param ctx the parse tree
	 */
	exitUsing_call_expr?: (ctx: Using_call_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.key_expr`.
	 * @param ctx the parse tree
	 */
	enterKey_expr?: (ctx: Key_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.key_expr`.
	 * @param ctx the parse tree
	 */
	exitKey_expr?: (ctx: Key_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.when_expr`.
	 * @param ctx the parse tree
	 */
	enterWhen_expr?: (ctx: When_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.when_expr`.
	 * @param ctx the parse tree
	 */
	exitWhen_expr?: (ctx: When_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.literal_value`.
	 * @param ctx the parse tree
	 */
	enterLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.literal_value`.
	 * @param ctx the parse tree
	 */
	exitLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.bind_parameter`.
	 * @param ctx the parse tree
	 */
	enterBind_parameter?: (ctx: Bind_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.bind_parameter`.
	 * @param ctx the parse tree
	 */
	exitBind_parameter?: (ctx: Bind_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.opt_bind_parameter`.
	 * @param ctx the parse tree
	 */
	enterOpt_bind_parameter?: (ctx: Opt_bind_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.opt_bind_parameter`.
	 * @param ctx the parse tree
	 */
	exitOpt_bind_parameter?: (ctx: Opt_bind_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.bind_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterBind_parameter_list?: (ctx: Bind_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.bind_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitBind_parameter_list?: (ctx: Bind_parameter_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_bind_parameter`.
	 * @param ctx the parse tree
	 */
	enterNamed_bind_parameter?: (ctx: Named_bind_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_bind_parameter`.
	 * @param ctx the parse tree
	 */
	exitNamed_bind_parameter?: (ctx: Named_bind_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_bind_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterNamed_bind_parameter_list?: (ctx: Named_bind_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_bind_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitNamed_bind_parameter_list?: (ctx: Named_bind_parameter_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.signed_number`.
	 * @param ctx the parse tree
	 */
	enterSigned_number?: (ctx: Signed_numberContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.signed_number`.
	 * @param ctx the parse tree
	 */
	exitSigned_number?: (ctx: Signed_numberContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_simple`.
	 * @param ctx the parse tree
	 */
	enterType_name_simple?: (ctx: Type_name_simpleContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_simple`.
	 * @param ctx the parse tree
	 */
	exitType_name_simple?: (ctx: Type_name_simpleContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.integer_or_bind`.
	 * @param ctx the parse tree
	 */
	enterInteger_or_bind?: (ctx: Integer_or_bindContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.integer_or_bind`.
	 * @param ctx the parse tree
	 */
	exitInteger_or_bind?: (ctx: Integer_or_bindContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_tag`.
	 * @param ctx the parse tree
	 */
	enterType_name_tag?: (ctx: Type_name_tagContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_tag`.
	 * @param ctx the parse tree
	 */
	exitType_name_tag?: (ctx: Type_name_tagContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.struct_arg`.
	 * @param ctx the parse tree
	 */
	enterStruct_arg?: (ctx: Struct_argContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.struct_arg`.
	 * @param ctx the parse tree
	 */
	exitStruct_arg?: (ctx: Struct_argContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.struct_arg_positional`.
	 * @param ctx the parse tree
	 */
	enterStruct_arg_positional?: (ctx: Struct_arg_positionalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.struct_arg_positional`.
	 * @param ctx the parse tree
	 */
	exitStruct_arg_positional?: (ctx: Struct_arg_positionalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.variant_arg`.
	 * @param ctx the parse tree
	 */
	enterVariant_arg?: (ctx: Variant_argContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.variant_arg`.
	 * @param ctx the parse tree
	 */
	exitVariant_arg?: (ctx: Variant_argContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.callable_arg`.
	 * @param ctx the parse tree
	 */
	enterCallable_arg?: (ctx: Callable_argContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.callable_arg`.
	 * @param ctx the parse tree
	 */
	exitCallable_arg?: (ctx: Callable_argContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.callable_arg_list`.
	 * @param ctx the parse tree
	 */
	enterCallable_arg_list?: (ctx: Callable_arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.callable_arg_list`.
	 * @param ctx the parse tree
	 */
	exitCallable_arg_list?: (ctx: Callable_arg_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_decimal`.
	 * @param ctx the parse tree
	 */
	enterType_name_decimal?: (ctx: Type_name_decimalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_decimal`.
	 * @param ctx the parse tree
	 */
	exitType_name_decimal?: (ctx: Type_name_decimalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_optional`.
	 * @param ctx the parse tree
	 */
	enterType_name_optional?: (ctx: Type_name_optionalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_optional`.
	 * @param ctx the parse tree
	 */
	exitType_name_optional?: (ctx: Type_name_optionalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_tuple`.
	 * @param ctx the parse tree
	 */
	enterType_name_tuple?: (ctx: Type_name_tupleContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_tuple`.
	 * @param ctx the parse tree
	 */
	exitType_name_tuple?: (ctx: Type_name_tupleContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_struct`.
	 * @param ctx the parse tree
	 */
	enterType_name_struct?: (ctx: Type_name_structContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_struct`.
	 * @param ctx the parse tree
	 */
	exitType_name_struct?: (ctx: Type_name_structContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_variant`.
	 * @param ctx the parse tree
	 */
	enterType_name_variant?: (ctx: Type_name_variantContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_variant`.
	 * @param ctx the parse tree
	 */
	exitType_name_variant?: (ctx: Type_name_variantContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_list`.
	 * @param ctx the parse tree
	 */
	enterType_name_list?: (ctx: Type_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_list`.
	 * @param ctx the parse tree
	 */
	exitType_name_list?: (ctx: Type_name_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_stream`.
	 * @param ctx the parse tree
	 */
	enterType_name_stream?: (ctx: Type_name_streamContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_stream`.
	 * @param ctx the parse tree
	 */
	exitType_name_stream?: (ctx: Type_name_streamContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_flow`.
	 * @param ctx the parse tree
	 */
	enterType_name_flow?: (ctx: Type_name_flowContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_flow`.
	 * @param ctx the parse tree
	 */
	exitType_name_flow?: (ctx: Type_name_flowContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_dict`.
	 * @param ctx the parse tree
	 */
	enterType_name_dict?: (ctx: Type_name_dictContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_dict`.
	 * @param ctx the parse tree
	 */
	exitType_name_dict?: (ctx: Type_name_dictContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_set`.
	 * @param ctx the parse tree
	 */
	enterType_name_set?: (ctx: Type_name_setContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_set`.
	 * @param ctx the parse tree
	 */
	exitType_name_set?: (ctx: Type_name_setContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_enum`.
	 * @param ctx the parse tree
	 */
	enterType_name_enum?: (ctx: Type_name_enumContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_enum`.
	 * @param ctx the parse tree
	 */
	exitType_name_enum?: (ctx: Type_name_enumContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_resource`.
	 * @param ctx the parse tree
	 */
	enterType_name_resource?: (ctx: Type_name_resourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_resource`.
	 * @param ctx the parse tree
	 */
	exitType_name_resource?: (ctx: Type_name_resourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_tagged`.
	 * @param ctx the parse tree
	 */
	enterType_name_tagged?: (ctx: Type_name_taggedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_tagged`.
	 * @param ctx the parse tree
	 */
	exitType_name_tagged?: (ctx: Type_name_taggedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_callable`.
	 * @param ctx the parse tree
	 */
	enterType_name_callable?: (ctx: Type_name_callableContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_callable`.
	 * @param ctx the parse tree
	 */
	exitType_name_callable?: (ctx: Type_name_callableContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_composite`.
	 * @param ctx the parse tree
	 */
	enterType_name_composite?: (ctx: Type_name_compositeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_composite`.
	 * @param ctx the parse tree
	 */
	exitType_name_composite?: (ctx: Type_name_compositeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_name_or_bind`.
	 * @param ctx the parse tree
	 */
	enterType_name_or_bind?: (ctx: Type_name_or_bindContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_name_or_bind`.
	 * @param ctx the parse tree
	 */
	exitType_name_or_bind?: (ctx: Type_name_or_bindContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.value_constructor_literal`.
	 * @param ctx the parse tree
	 */
	enterValue_constructor_literal?: (ctx: Value_constructor_literalContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.value_constructor_literal`.
	 * @param ctx the parse tree
	 */
	exitValue_constructor_literal?: (ctx: Value_constructor_literalContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.value_constructor`.
	 * @param ctx the parse tree
	 */
	enterValue_constructor?: (ctx: Value_constructorContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.value_constructor`.
	 * @param ctx the parse tree
	 */
	exitValue_constructor?: (ctx: Value_constructorContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.declare_stmt`.
	 * @param ctx the parse tree
	 */
	enterDeclare_stmt?: (ctx: Declare_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.declare_stmt`.
	 * @param ctx the parse tree
	 */
	exitDeclare_stmt?: (ctx: Declare_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.module_path`.
	 * @param ctx the parse tree
	 */
	enterModule_path?: (ctx: Module_pathContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.module_path`.
	 * @param ctx the parse tree
	 */
	exitModule_path?: (ctx: Module_pathContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.export_stmt`.
	 * @param ctx the parse tree
	 */
	enterExport_stmt?: (ctx: Export_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.export_stmt`.
	 * @param ctx the parse tree
	 */
	exitExport_stmt?: (ctx: Export_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.call_action`.
	 * @param ctx the parse tree
	 */
	enterCall_action?: (ctx: Call_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.call_action`.
	 * @param ctx the parse tree
	 */
	exitCall_action?: (ctx: Call_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.inline_action`.
	 * @param ctx the parse tree
	 */
	enterInline_action?: (ctx: Inline_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.inline_action`.
	 * @param ctx the parse tree
	 */
	exitInline_action?: (ctx: Inline_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.do_stmt`.
	 * @param ctx the parse tree
	 */
	enterDo_stmt?: (ctx: Do_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.do_stmt`.
	 * @param ctx the parse tree
	 */
	exitDo_stmt?: (ctx: Do_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.pragma_stmt`.
	 * @param ctx the parse tree
	 */
	enterPragma_stmt?: (ctx: Pragma_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.pragma_stmt`.
	 * @param ctx the parse tree
	 */
	exitPragma_stmt?: (ctx: Pragma_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.pragma_value`.
	 * @param ctx the parse tree
	 */
	enterPragma_value?: (ctx: Pragma_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.pragma_value`.
	 * @param ctx the parse tree
	 */
	exitPragma_value?: (ctx: Pragma_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sort_specification`.
	 * @param ctx the parse tree
	 */
	enterSort_specification?: (ctx: Sort_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sort_specification`.
	 * @param ctx the parse tree
	 */
	exitSort_specification?: (ctx: Sort_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sort_specification_list`.
	 * @param ctx the parse tree
	 */
	enterSort_specification_list?: (ctx: Sort_specification_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sort_specification_list`.
	 * @param ctx the parse tree
	 */
	exitSort_specification_list?: (ctx: Sort_specification_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_unparenthesized_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_unparenthesized_stmt?: (ctx: Select_unparenthesized_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_unparenthesized_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_unparenthesized_stmt?: (ctx: Select_unparenthesized_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_kind_parenthesis`.
	 * @param ctx the parse tree
	 */
	enterSelect_kind_parenthesis?: (ctx: Select_kind_parenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_kind_parenthesis`.
	 * @param ctx the parse tree
	 */
	exitSelect_kind_parenthesis?: (ctx: Select_kind_parenthesisContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_op`.
	 * @param ctx the parse tree
	 */
	enterSelect_op?: (ctx: Select_opContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_op`.
	 * @param ctx the parse tree
	 */
	exitSelect_op?: (ctx: Select_opContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_kind_partial`.
	 * @param ctx the parse tree
	 */
	enterSelect_kind_partial?: (ctx: Select_kind_partialContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_kind_partial`.
	 * @param ctx the parse tree
	 */
	exitSelect_kind_partial?: (ctx: Select_kind_partialContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_kind`.
	 * @param ctx the parse tree
	 */
	enterSelect_kind?: (ctx: Select_kindContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_kind`.
	 * @param ctx the parse tree
	 */
	exitSelect_kind?: (ctx: Select_kindContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.process_core`.
	 * @param ctx the parse tree
	 */
	enterProcess_core?: (ctx: Process_coreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.process_core`.
	 * @param ctx the parse tree
	 */
	exitProcess_core?: (ctx: Process_coreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.external_call_param`.
	 * @param ctx the parse tree
	 */
	enterExternal_call_param?: (ctx: External_call_paramContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.external_call_param`.
	 * @param ctx the parse tree
	 */
	exitExternal_call_param?: (ctx: External_call_paramContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.external_call_settings`.
	 * @param ctx the parse tree
	 */
	enterExternal_call_settings?: (ctx: External_call_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.external_call_settings`.
	 * @param ctx the parse tree
	 */
	exitExternal_call_settings?: (ctx: External_call_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.reduce_core`.
	 * @param ctx the parse tree
	 */
	enterReduce_core?: (ctx: Reduce_coreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.reduce_core`.
	 * @param ctx the parse tree
	 */
	exitReduce_core?: (ctx: Reduce_coreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.opt_set_quantifier`.
	 * @param ctx the parse tree
	 */
	enterOpt_set_quantifier?: (ctx: Opt_set_quantifierContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.opt_set_quantifier`.
	 * @param ctx the parse tree
	 */
	exitOpt_set_quantifier?: (ctx: Opt_set_quantifierContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.select_core`.
	 * @param ctx the parse tree
	 */
	enterSelect_core?: (ctx: Select_coreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.select_core`.
	 * @param ctx the parse tree
	 */
	exitSelect_core?: (ctx: Select_coreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_recognition_clause`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_recognition_clause?: (ctx: Row_pattern_recognition_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_recognition_clause`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_recognition_clause?: (ctx: Row_pattern_recognition_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_rows_per_match`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_rows_per_match?: (ctx: Row_pattern_rows_per_matchContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_rows_per_match`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_rows_per_match?: (ctx: Row_pattern_rows_per_matchContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_empty_match_handling`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_empty_match_handling?: (ctx: Row_pattern_empty_match_handlingContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_empty_match_handling`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_empty_match_handling?: (ctx: Row_pattern_empty_match_handlingContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_measures`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_measures?: (ctx: Row_pattern_measuresContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_measures`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_measures?: (ctx: Row_pattern_measuresContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_measure_list`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_measure_list?: (ctx: Row_pattern_measure_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_measure_list`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_measure_list?: (ctx: Row_pattern_measure_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_measure_definition`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_measure_definition?: (ctx: Row_pattern_measure_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_measure_definition`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_measure_definition?: (ctx: Row_pattern_measure_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_common_syntax`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_common_syntax?: (ctx: Row_pattern_common_syntaxContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_common_syntax`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_common_syntax?: (ctx: Row_pattern_common_syntaxContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_skip_to`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_skip_to?: (ctx: Row_pattern_skip_toContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_skip_to`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_skip_to?: (ctx: Row_pattern_skip_toContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_skip_to_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_skip_to_variable_name?: (ctx: Row_pattern_skip_to_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_skip_to_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_skip_to_variable_name?: (ctx: Row_pattern_skip_to_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_initial_or_seek`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_initial_or_seek?: (ctx: Row_pattern_initial_or_seekContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_initial_or_seek`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_initial_or_seek?: (ctx: Row_pattern_initial_or_seekContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern?: (ctx: Row_patternContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern?: (ctx: Row_patternContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_term`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_term?: (ctx: Row_pattern_termContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_term`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_term?: (ctx: Row_pattern_termContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_factor`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_factor?: (ctx: Row_pattern_factorContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_factor`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_factor?: (ctx: Row_pattern_factorContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_quantifier`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_quantifier?: (ctx: Row_pattern_quantifierContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_quantifier`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_quantifier?: (ctx: Row_pattern_quantifierContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_primary`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_primary?: (ctx: Row_pattern_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_primary`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_primary?: (ctx: Row_pattern_primaryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_primary_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_primary_variable_name?: (ctx: Row_pattern_primary_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_primary_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_primary_variable_name?: (ctx: Row_pattern_primary_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_permute`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_permute?: (ctx: Row_pattern_permuteContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_permute`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_permute?: (ctx: Row_pattern_permuteContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_clause`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_clause?: (ctx: Row_pattern_subset_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_clause`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_clause?: (ctx: Row_pattern_subset_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_list`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_list?: (ctx: Row_pattern_subset_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_list`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_list?: (ctx: Row_pattern_subset_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_item`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_item?: (ctx: Row_pattern_subset_itemContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_item`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_item?: (ctx: Row_pattern_subset_itemContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_item_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_item_variable_name?: (ctx: Row_pattern_subset_item_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_item_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_item_variable_name?: (ctx: Row_pattern_subset_item_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_rhs`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_rhs?: (ctx: Row_pattern_subset_rhsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_rhs`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_rhs?: (ctx: Row_pattern_subset_rhsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_subset_rhs_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_subset_rhs_variable_name?: (ctx: Row_pattern_subset_rhs_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_subset_rhs_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_subset_rhs_variable_name?: (ctx: Row_pattern_subset_rhs_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_definition_list`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_definition_list?: (ctx: Row_pattern_definition_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_definition_list`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_definition_list?: (ctx: Row_pattern_definition_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_definition`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_definition?: (ctx: Row_pattern_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_definition`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_definition?: (ctx: Row_pattern_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_definition_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_definition_variable_name?: (ctx: Row_pattern_definition_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_definition_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_definition_variable_name?: (ctx: Row_pattern_definition_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_definition_search_condition`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_definition_search_condition?: (ctx: Row_pattern_definition_search_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_definition_search_condition`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_definition_search_condition?: (ctx: Row_pattern_definition_search_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.search_condition`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.search_condition`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.row_pattern_variable_name`.
	 * @param ctx the parse tree
	 */
	enterRow_pattern_variable_name?: (ctx: Row_pattern_variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.row_pattern_variable_name`.
	 * @param ctx the parse tree
	 */
	exitRow_pattern_variable_name?: (ctx: Row_pattern_variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ext_order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterExt_order_by_clause?: (ctx: Ext_order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ext_order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitExt_order_by_clause?: (ctx: Ext_order_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.group_by_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.group_by_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.grouping_element_list`.
	 * @param ctx the parse tree
	 */
	enterGrouping_element_list?: (ctx: Grouping_element_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.grouping_element_list`.
	 * @param ctx the parse tree
	 */
	exitGrouping_element_list?: (ctx: Grouping_element_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.grouping_element`.
	 * @param ctx the parse tree
	 */
	enterGrouping_element?: (ctx: Grouping_elementContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.grouping_element`.
	 * @param ctx the parse tree
	 */
	exitGrouping_element?: (ctx: Grouping_elementContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ordinary_grouping_set`.
	 * @param ctx the parse tree
	 */
	enterOrdinary_grouping_set?: (ctx: Ordinary_grouping_setContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ordinary_grouping_set`.
	 * @param ctx the parse tree
	 */
	exitOrdinary_grouping_set?: (ctx: Ordinary_grouping_setContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ordinary_grouping_set_list`.
	 * @param ctx the parse tree
	 */
	enterOrdinary_grouping_set_list?: (ctx: Ordinary_grouping_set_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ordinary_grouping_set_list`.
	 * @param ctx the parse tree
	 */
	exitOrdinary_grouping_set_list?: (ctx: Ordinary_grouping_set_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.rollup_list`.
	 * @param ctx the parse tree
	 */
	enterRollup_list?: (ctx: Rollup_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.rollup_list`.
	 * @param ctx the parse tree
	 */
	exitRollup_list?: (ctx: Rollup_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.cube_list`.
	 * @param ctx the parse tree
	 */
	enterCube_list?: (ctx: Cube_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.cube_list`.
	 * @param ctx the parse tree
	 */
	exitCube_list?: (ctx: Cube_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.grouping_sets_specification`.
	 * @param ctx the parse tree
	 */
	enterGrouping_sets_specification?: (ctx: Grouping_sets_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.grouping_sets_specification`.
	 * @param ctx the parse tree
	 */
	exitGrouping_sets_specification?: (ctx: Grouping_sets_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.hopping_window_specification`.
	 * @param ctx the parse tree
	 */
	enterHopping_window_specification?: (ctx: Hopping_window_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.hopping_window_specification`.
	 * @param ctx the parse tree
	 */
	exitHopping_window_specification?: (ctx: Hopping_window_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.result_column`.
	 * @param ctx the parse tree
	 */
	enterResult_column?: (ctx: Result_columnContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.result_column`.
	 * @param ctx the parse tree
	 */
	exitResult_column?: (ctx: Result_columnContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.join_source`.
	 * @param ctx the parse tree
	 */
	enterJoin_source?: (ctx: Join_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.join_source`.
	 * @param ctx the parse tree
	 */
	exitJoin_source?: (ctx: Join_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_column`.
	 * @param ctx the parse tree
	 */
	enterNamed_column?: (ctx: Named_columnContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_column`.
	 * @param ctx the parse tree
	 */
	exitNamed_column?: (ctx: Named_columnContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.flatten_by_arg`.
	 * @param ctx the parse tree
	 */
	enterFlatten_by_arg?: (ctx: Flatten_by_argContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.flatten_by_arg`.
	 * @param ctx the parse tree
	 */
	exitFlatten_by_arg?: (ctx: Flatten_by_argContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.flatten_source`.
	 * @param ctx the parse tree
	 */
	enterFlatten_source?: (ctx: Flatten_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.flatten_source`.
	 * @param ctx the parse tree
	 */
	exitFlatten_source?: (ctx: Flatten_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_single_source`.
	 * @param ctx the parse tree
	 */
	enterNamed_single_source?: (ctx: Named_single_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_single_source`.
	 * @param ctx the parse tree
	 */
	exitNamed_single_source?: (ctx: Named_single_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.single_source`.
	 * @param ctx the parse tree
	 */
	enterSingle_source?: (ctx: Single_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.single_source`.
	 * @param ctx the parse tree
	 */
	exitSingle_source?: (ctx: Single_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sample_clause`.
	 * @param ctx the parse tree
	 */
	enterSample_clause?: (ctx: Sample_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sample_clause`.
	 * @param ctx the parse tree
	 */
	exitSample_clause?: (ctx: Sample_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.tablesample_clause`.
	 * @param ctx the parse tree
	 */
	enterTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.tablesample_clause`.
	 * @param ctx the parse tree
	 */
	exitTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.sampling_mode`.
	 * @param ctx the parse tree
	 */
	enterSampling_mode?: (ctx: Sampling_modeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.sampling_mode`.
	 * @param ctx the parse tree
	 */
	exitSampling_mode?: (ctx: Sampling_modeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.repeatable_clause`.
	 * @param ctx the parse tree
	 */
	enterRepeatable_clause?: (ctx: Repeatable_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.repeatable_clause`.
	 * @param ctx the parse tree
	 */
	exitRepeatable_clause?: (ctx: Repeatable_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.join_op`.
	 * @param ctx the parse tree
	 */
	enterJoin_op?: (ctx: Join_opContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.join_op`.
	 * @param ctx the parse tree
	 */
	exitJoin_op?: (ctx: Join_opContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.join_constraint`.
	 * @param ctx the parse tree
	 */
	enterJoin_constraint?: (ctx: Join_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.join_constraint`.
	 * @param ctx the parse tree
	 */
	exitJoin_constraint?: (ctx: Join_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.returning_columns_list`.
	 * @param ctx the parse tree
	 */
	enterReturning_columns_list?: (ctx: Returning_columns_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.returning_columns_list`.
	 * @param ctx the parse tree
	 */
	exitReturning_columns_list?: (ctx: Returning_columns_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.into_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterInto_table_stmt?: (ctx: Into_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.into_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitInto_table_stmt?: (ctx: Into_table_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.into_values_source`.
	 * @param ctx the parse tree
	 */
	enterInto_values_source?: (ctx: Into_values_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.into_values_source`.
	 * @param ctx the parse tree
	 */
	exitInto_values_source?: (ctx: Into_values_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.values_stmt`.
	 * @param ctx the parse tree
	 */
	enterValues_stmt?: (ctx: Values_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.values_stmt`.
	 * @param ctx the parse tree
	 */
	exitValues_stmt?: (ctx: Values_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.values_source`.
	 * @param ctx the parse tree
	 */
	enterValues_source?: (ctx: Values_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.values_source`.
	 * @param ctx the parse tree
	 */
	exitValues_source?: (ctx: Values_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.values_source_row_list`.
	 * @param ctx the parse tree
	 */
	enterValues_source_row_list?: (ctx: Values_source_row_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.values_source_row_list`.
	 * @param ctx the parse tree
	 */
	exitValues_source_row_list?: (ctx: Values_source_row_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.values_source_row`.
	 * @param ctx the parse tree
	 */
	enterValues_source_row?: (ctx: Values_source_rowContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.values_source_row`.
	 * @param ctx the parse tree
	 */
	exitValues_source_row?: (ctx: Values_source_rowContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.simple_values_source`.
	 * @param ctx the parse tree
	 */
	enterSimple_values_source?: (ctx: Simple_values_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.simple_values_source`.
	 * @param ctx the parse tree
	 */
	exitSimple_values_source?: (ctx: Simple_values_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_external_data_source_stmt?: (ctx: Create_external_data_source_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_external_data_source_stmt?: (ctx: Create_external_data_source_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_data_source_stmt?: (ctx: Alter_external_data_source_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_data_source_stmt?: (ctx: Alter_external_data_source_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_external_data_source_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_data_source_action?: (ctx: Alter_external_data_source_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_external_data_source_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_data_source_action?: (ctx: Alter_external_data_source_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_data_source_stmt?: (ctx: Drop_external_data_source_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_external_data_source_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_data_source_stmt?: (ctx: Drop_external_data_source_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_view_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_view_stmt?: (ctx: Drop_view_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_view_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_view_stmt?: (ctx: Drop_view_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.upsert_object_stmt`.
	 * @param ctx the parse tree
	 */
	enterUpsert_object_stmt?: (ctx: Upsert_object_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.upsert_object_stmt`.
	 * @param ctx the parse tree
	 */
	exitUpsert_object_stmt?: (ctx: Upsert_object_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_object_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_object_stmt?: (ctx: Create_object_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_object_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_object_stmt?: (ctx: Create_object_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_object_features`.
	 * @param ctx the parse tree
	 */
	enterCreate_object_features?: (ctx: Create_object_featuresContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_object_features`.
	 * @param ctx the parse tree
	 */
	exitCreate_object_features?: (ctx: Create_object_featuresContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_object_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_object_stmt?: (ctx: Alter_object_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_object_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_object_stmt?: (ctx: Alter_object_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_object_features`.
	 * @param ctx the parse tree
	 */
	enterAlter_object_features?: (ctx: Alter_object_featuresContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_object_features`.
	 * @param ctx the parse tree
	 */
	exitAlter_object_features?: (ctx: Alter_object_featuresContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_object_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_object_stmt?: (ctx: Drop_object_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_object_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_object_stmt?: (ctx: Drop_object_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_object_features`.
	 * @param ctx the parse tree
	 */
	enterDrop_object_features?: (ctx: Drop_object_featuresContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_object_features`.
	 * @param ctx the parse tree
	 */
	exitDrop_object_features?: (ctx: Drop_object_featuresContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_feature_value`.
	 * @param ctx the parse tree
	 */
	enterObject_feature_value?: (ctx: Object_feature_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_feature_value`.
	 * @param ctx the parse tree
	 */
	exitObject_feature_value?: (ctx: Object_feature_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_feature_kv`.
	 * @param ctx the parse tree
	 */
	enterObject_feature_kv?: (ctx: Object_feature_kvContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_feature_kv`.
	 * @param ctx the parse tree
	 */
	exitObject_feature_kv?: (ctx: Object_feature_kvContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_feature_flag`.
	 * @param ctx the parse tree
	 */
	enterObject_feature_flag?: (ctx: Object_feature_flagContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_feature_flag`.
	 * @param ctx the parse tree
	 */
	exitObject_feature_flag?: (ctx: Object_feature_flagContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_feature`.
	 * @param ctx the parse tree
	 */
	enterObject_feature?: (ctx: Object_featureContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_feature`.
	 * @param ctx the parse tree
	 */
	exitObject_feature?: (ctx: Object_featureContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_features`.
	 * @param ctx the parse tree
	 */
	enterObject_features?: (ctx: Object_featuresContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_features`.
	 * @param ctx the parse tree
	 */
	exitObject_features?: (ctx: Object_featuresContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_type_ref`.
	 * @param ctx the parse tree
	 */
	enterObject_type_ref?: (ctx: Object_type_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_type_ref`.
	 * @param ctx the parse tree
	 */
	exitObject_type_ref?: (ctx: Object_type_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_table_entry`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_entry?: (ctx: Create_table_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_table_entry`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_entry?: (ctx: Create_table_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_backup_collection_stmt?: (ctx: Create_backup_collection_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_backup_collection_stmt?: (ctx: Create_backup_collection_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_backup_collection_stmt?: (ctx: Alter_backup_collection_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_backup_collection_stmt?: (ctx: Alter_backup_collection_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_backup_collection_stmt?: (ctx: Drop_backup_collection_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_backup_collection_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_backup_collection_stmt?: (ctx: Drop_backup_collection_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_backup_collection_entries`.
	 * @param ctx the parse tree
	 */
	enterCreate_backup_collection_entries?: (ctx: Create_backup_collection_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_backup_collection_entries`.
	 * @param ctx the parse tree
	 */
	exitCreate_backup_collection_entries?: (ctx: Create_backup_collection_entriesContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_backup_collection_entries_many`.
	 * @param ctx the parse tree
	 */
	enterCreate_backup_collection_entries_many?: (ctx: Create_backup_collection_entries_manyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_backup_collection_entries_many`.
	 * @param ctx the parse tree
	 */
	exitCreate_backup_collection_entries_many?: (ctx: Create_backup_collection_entries_manyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_list`.
	 * @param ctx the parse tree
	 */
	enterTable_list?: (ctx: Table_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_list`.
	 * @param ctx the parse tree
	 */
	exitTable_list?: (ctx: Table_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_backup_collection_actions`.
	 * @param ctx the parse tree
	 */
	enterAlter_backup_collection_actions?: (ctx: Alter_backup_collection_actionsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_backup_collection_actions`.
	 * @param ctx the parse tree
	 */
	exitAlter_backup_collection_actions?: (ctx: Alter_backup_collection_actionsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_backup_collection_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_backup_collection_action?: (ctx: Alter_backup_collection_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_backup_collection_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_backup_collection_action?: (ctx: Alter_backup_collection_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_backup_collection_entries`.
	 * @param ctx the parse tree
	 */
	enterAlter_backup_collection_entries?: (ctx: Alter_backup_collection_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_backup_collection_entries`.
	 * @param ctx the parse tree
	 */
	exitAlter_backup_collection_entries?: (ctx: Alter_backup_collection_entriesContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_backup_collection_entry`.
	 * @param ctx the parse tree
	 */
	enterAlter_backup_collection_entry?: (ctx: Alter_backup_collection_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_backup_collection_entry`.
	 * @param ctx the parse tree
	 */
	exitAlter_backup_collection_entry?: (ctx: Alter_backup_collection_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.backup_collection`.
	 * @param ctx the parse tree
	 */
	enterBackup_collection?: (ctx: Backup_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.backup_collection`.
	 * @param ctx the parse tree
	 */
	exitBackup_collection?: (ctx: Backup_collectionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.backup_collection_settings`.
	 * @param ctx the parse tree
	 */
	enterBackup_collection_settings?: (ctx: Backup_collection_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.backup_collection_settings`.
	 * @param ctx the parse tree
	 */
	exitBackup_collection_settings?: (ctx: Backup_collection_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.backup_collection_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterBackup_collection_settings_entry?: (ctx: Backup_collection_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.backup_collection_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitBackup_collection_settings_entry?: (ctx: Backup_collection_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.backup_stmt`.
	 * @param ctx the parse tree
	 */
	enterBackup_stmt?: (ctx: Backup_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.backup_stmt`.
	 * @param ctx the parse tree
	 */
	exitBackup_stmt?: (ctx: Backup_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.restore_stmt`.
	 * @param ctx the parse tree
	 */
	enterRestore_stmt?: (ctx: Restore_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.restore_stmt`.
	 * @param ctx the parse tree
	 */
	exitRestore_stmt?: (ctx: Restore_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_inherits`.
	 * @param ctx the parse tree
	 */
	enterTable_inherits?: (ctx: Table_inheritsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_inherits`.
	 * @param ctx the parse tree
	 */
	exitTable_inherits?: (ctx: Table_inheritsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_partition_by`.
	 * @param ctx the parse tree
	 */
	enterTable_partition_by?: (ctx: Table_partition_byContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_partition_by`.
	 * @param ctx the parse tree
	 */
	exitTable_partition_by?: (ctx: Table_partition_byContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.with_table_settings`.
	 * @param ctx the parse tree
	 */
	enterWith_table_settings?: (ctx: With_table_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.with_table_settings`.
	 * @param ctx the parse tree
	 */
	exitWith_table_settings?: (ctx: With_table_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_tablestore`.
	 * @param ctx the parse tree
	 */
	enterTable_tablestore?: (ctx: Table_tablestoreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_tablestore`.
	 * @param ctx the parse tree
	 */
	exitTable_tablestore?: (ctx: Table_tablestoreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterTable_settings_entry?: (ctx: Table_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitTable_settings_entry?: (ctx: Table_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_as_source`.
	 * @param ctx the parse tree
	 */
	enterTable_as_source?: (ctx: Table_as_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_as_source`.
	 * @param ctx the parse tree
	 */
	exitTable_as_source?: (ctx: Table_as_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_action?: (ctx: Alter_table_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_action?: (ctx: Alter_table_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_external_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_table_stmt?: (ctx: Alter_external_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_external_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_table_stmt?: (ctx: Alter_external_table_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_external_table_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_table_action?: (ctx: Alter_external_table_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_external_table_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_table_action?: (ctx: Alter_external_table_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_store_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_store_stmt?: (ctx: Alter_table_store_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_store_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_store_stmt?: (ctx: Alter_table_store_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_store_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_store_action?: (ctx: Alter_table_store_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_store_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_store_action?: (ctx: Alter_table_store_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_add_column`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_column?: (ctx: Alter_table_add_columnContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_add_column`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_column?: (ctx: Alter_table_add_columnContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_drop_column`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_drop_column?: (ctx: Alter_table_drop_columnContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_drop_column`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_drop_column?: (ctx: Alter_table_drop_columnContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_column`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_column?: (ctx: Alter_table_alter_columnContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_column`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_column?: (ctx: Alter_table_alter_columnContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_column_drop_not_null`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_column_drop_not_null?: (ctx: Alter_table_alter_column_drop_not_nullContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_column_drop_not_null`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_column_drop_not_null?: (ctx: Alter_table_alter_column_drop_not_nullContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_add_column_family`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_column_family?: (ctx: Alter_table_add_column_familyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_add_column_family`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_column_family?: (ctx: Alter_table_add_column_familyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_column_family`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_column_family?: (ctx: Alter_table_alter_column_familyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_column_family`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_column_family?: (ctx: Alter_table_alter_column_familyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_set_table_setting_uncompat`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_set_table_setting_uncompat?: (ctx: Alter_table_set_table_setting_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_set_table_setting_uncompat`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_set_table_setting_uncompat?: (ctx: Alter_table_set_table_setting_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_set_table_setting_compat`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_set_table_setting_compat?: (ctx: Alter_table_set_table_setting_compatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_set_table_setting_compat`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_set_table_setting_compat?: (ctx: Alter_table_set_table_setting_compatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_reset_table_setting`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_reset_table_setting?: (ctx: Alter_table_reset_table_settingContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_reset_table_setting`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_reset_table_setting?: (ctx: Alter_table_reset_table_settingContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_add_index`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_index?: (ctx: Alter_table_add_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_add_index`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_index?: (ctx: Alter_table_add_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_drop_index`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_drop_index?: (ctx: Alter_table_drop_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_drop_index`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_drop_index?: (ctx: Alter_table_drop_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_rename_to`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_rename_to?: (ctx: Alter_table_rename_toContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_rename_to`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_rename_to?: (ctx: Alter_table_rename_toContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_rename_index_to`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_rename_index_to?: (ctx: Alter_table_rename_index_toContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_rename_index_to`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_rename_index_to?: (ctx: Alter_table_rename_index_toContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_add_changefeed`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_changefeed?: (ctx: Alter_table_add_changefeedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_add_changefeed`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_changefeed?: (ctx: Alter_table_add_changefeedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_changefeed`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_changefeed?: (ctx: Alter_table_alter_changefeedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_changefeed`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_changefeed?: (ctx: Alter_table_alter_changefeedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_drop_changefeed`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_drop_changefeed?: (ctx: Alter_table_drop_changefeedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_drop_changefeed`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_drop_changefeed?: (ctx: Alter_table_drop_changefeedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_index`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_index?: (ctx: Alter_table_alter_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_index`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_index?: (ctx: Alter_table_alter_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.column_schema`.
	 * @param ctx the parse tree
	 */
	enterColumn_schema?: (ctx: Column_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.column_schema`.
	 * @param ctx the parse tree
	 */
	exitColumn_schema?: (ctx: Column_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.family_relation`.
	 * @param ctx the parse tree
	 */
	enterFamily_relation?: (ctx: Family_relationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.family_relation`.
	 * @param ctx the parse tree
	 */
	exitFamily_relation?: (ctx: Family_relationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.opt_column_constraints`.
	 * @param ctx the parse tree
	 */
	enterOpt_column_constraints?: (ctx: Opt_column_constraintsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.opt_column_constraints`.
	 * @param ctx the parse tree
	 */
	exitOpt_column_constraints?: (ctx: Opt_column_constraintsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.column_order_by_specification`.
	 * @param ctx the parse tree
	 */
	enterColumn_order_by_specification?: (ctx: Column_order_by_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.column_order_by_specification`.
	 * @param ctx the parse tree
	 */
	exitColumn_order_by_specification?: (ctx: Column_order_by_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	enterTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	exitTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_index`.
	 * @param ctx the parse tree
	 */
	enterTable_index?: (ctx: Table_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_index`.
	 * @param ctx the parse tree
	 */
	exitTable_index?: (ctx: Table_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_index_type`.
	 * @param ctx the parse tree
	 */
	enterTable_index_type?: (ctx: Table_index_typeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_index_type`.
	 * @param ctx the parse tree
	 */
	exitTable_index_type?: (ctx: Table_index_typeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.global_index`.
	 * @param ctx the parse tree
	 */
	enterGlobal_index?: (ctx: Global_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.global_index`.
	 * @param ctx the parse tree
	 */
	exitGlobal_index?: (ctx: Global_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.local_index`.
	 * @param ctx the parse tree
	 */
	enterLocal_index?: (ctx: Local_indexContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.local_index`.
	 * @param ctx the parse tree
	 */
	exitLocal_index?: (ctx: Local_indexContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.index_subtype`.
	 * @param ctx the parse tree
	 */
	enterIndex_subtype?: (ctx: Index_subtypeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.index_subtype`.
	 * @param ctx the parse tree
	 */
	exitIndex_subtype?: (ctx: Index_subtypeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.with_index_settings`.
	 * @param ctx the parse tree
	 */
	enterWith_index_settings?: (ctx: With_index_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.with_index_settings`.
	 * @param ctx the parse tree
	 */
	exitWith_index_settings?: (ctx: With_index_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.index_setting_entry`.
	 * @param ctx the parse tree
	 */
	enterIndex_setting_entry?: (ctx: Index_setting_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.index_setting_entry`.
	 * @param ctx the parse tree
	 */
	exitIndex_setting_entry?: (ctx: Index_setting_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.index_setting_value`.
	 * @param ctx the parse tree
	 */
	enterIndex_setting_value?: (ctx: Index_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.index_setting_value`.
	 * @param ctx the parse tree
	 */
	exitIndex_setting_value?: (ctx: Index_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.changefeed`.
	 * @param ctx the parse tree
	 */
	enterChangefeed?: (ctx: ChangefeedContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.changefeed`.
	 * @param ctx the parse tree
	 */
	exitChangefeed?: (ctx: ChangefeedContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.changefeed_settings`.
	 * @param ctx the parse tree
	 */
	enterChangefeed_settings?: (ctx: Changefeed_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.changefeed_settings`.
	 * @param ctx the parse tree
	 */
	exitChangefeed_settings?: (ctx: Changefeed_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.changefeed_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterChangefeed_settings_entry?: (ctx: Changefeed_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.changefeed_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitChangefeed_settings_entry?: (ctx: Changefeed_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.changefeed_setting_value`.
	 * @param ctx the parse tree
	 */
	enterChangefeed_setting_value?: (ctx: Changefeed_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.changefeed_setting_value`.
	 * @param ctx the parse tree
	 */
	exitChangefeed_setting_value?: (ctx: Changefeed_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.changefeed_alter_settings`.
	 * @param ctx the parse tree
	 */
	enterChangefeed_alter_settings?: (ctx: Changefeed_alter_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.changefeed_alter_settings`.
	 * @param ctx the parse tree
	 */
	exitChangefeed_alter_settings?: (ctx: Changefeed_alter_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_setting_entry`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_setting_entry?: (ctx: Alter_table_setting_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_setting_entry`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_setting_entry?: (ctx: Alter_table_setting_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_setting_value`.
	 * @param ctx the parse tree
	 */
	enterTable_setting_value?: (ctx: Table_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_setting_value`.
	 * @param ctx the parse tree
	 */
	exitTable_setting_value?: (ctx: Table_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ttl_tier_list`.
	 * @param ctx the parse tree
	 */
	enterTtl_tier_list?: (ctx: Ttl_tier_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ttl_tier_list`.
	 * @param ctx the parse tree
	 */
	exitTtl_tier_list?: (ctx: Ttl_tier_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.ttl_tier_action`.
	 * @param ctx the parse tree
	 */
	enterTtl_tier_action?: (ctx: Ttl_tier_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.ttl_tier_action`.
	 * @param ctx the parse tree
	 */
	exitTtl_tier_action?: (ctx: Ttl_tier_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.family_entry`.
	 * @param ctx the parse tree
	 */
	enterFamily_entry?: (ctx: Family_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.family_entry`.
	 * @param ctx the parse tree
	 */
	exitFamily_entry?: (ctx: Family_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.family_settings`.
	 * @param ctx the parse tree
	 */
	enterFamily_settings?: (ctx: Family_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.family_settings`.
	 * @param ctx the parse tree
	 */
	exitFamily_settings?: (ctx: Family_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.family_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterFamily_settings_entry?: (ctx: Family_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.family_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitFamily_settings_entry?: (ctx: Family_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.family_setting_value`.
	 * @param ctx the parse tree
	 */
	enterFamily_setting_value?: (ctx: Family_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.family_setting_value`.
	 * @param ctx the parse tree
	 */
	exitFamily_setting_value?: (ctx: Family_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.split_boundaries`.
	 * @param ctx the parse tree
	 */
	enterSplit_boundaries?: (ctx: Split_boundariesContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.split_boundaries`.
	 * @param ctx the parse tree
	 */
	exitSplit_boundaries?: (ctx: Split_boundariesContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.literal_value_list`.
	 * @param ctx the parse tree
	 */
	enterLiteral_value_list?: (ctx: Literal_value_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.literal_value_list`.
	 * @param ctx the parse tree
	 */
	exitLiteral_value_list?: (ctx: Literal_value_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_table_alter_index_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_alter_index_action?: (ctx: Alter_table_alter_index_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_table_alter_index_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_alter_index_action?: (ctx: Alter_table_alter_index_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_user_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_user_stmt?: (ctx: Create_user_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_user_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_user_stmt?: (ctx: Create_user_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_user_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_stmt?: (ctx: Alter_user_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_user_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_stmt?: (ctx: Alter_user_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_group_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_group_stmt?: (ctx: Create_group_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_group_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_group_stmt?: (ctx: Create_group_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_group_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_group_stmt?: (ctx: Alter_group_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_group_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_group_stmt?: (ctx: Alter_group_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_role_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_role_stmt?: (ctx: Drop_role_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_role_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_role_stmt?: (ctx: Drop_role_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.role_name`.
	 * @param ctx the parse tree
	 */
	enterRole_name?: (ctx: Role_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.role_name`.
	 * @param ctx the parse tree
	 */
	exitRole_name?: (ctx: Role_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_user_option`.
	 * @param ctx the parse tree
	 */
	enterCreate_user_option?: (ctx: Create_user_optionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_user_option`.
	 * @param ctx the parse tree
	 */
	exitCreate_user_option?: (ctx: Create_user_optionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.password_option`.
	 * @param ctx the parse tree
	 */
	enterPassword_option?: (ctx: Password_optionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.password_option`.
	 * @param ctx the parse tree
	 */
	exitPassword_option?: (ctx: Password_optionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.login_option`.
	 * @param ctx the parse tree
	 */
	enterLogin_option?: (ctx: Login_optionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.login_option`.
	 * @param ctx the parse tree
	 */
	exitLogin_option?: (ctx: Login_optionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.grant_permissions_stmt`.
	 * @param ctx the parse tree
	 */
	enterGrant_permissions_stmt?: (ctx: Grant_permissions_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.grant_permissions_stmt`.
	 * @param ctx the parse tree
	 */
	exitGrant_permissions_stmt?: (ctx: Grant_permissions_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.revoke_permissions_stmt`.
	 * @param ctx the parse tree
	 */
	enterRevoke_permissions_stmt?: (ctx: Revoke_permissions_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.revoke_permissions_stmt`.
	 * @param ctx the parse tree
	 */
	exitRevoke_permissions_stmt?: (ctx: Revoke_permissions_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.permission_id`.
	 * @param ctx the parse tree
	 */
	enterPermission_id?: (ctx: Permission_idContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.permission_id`.
	 * @param ctx the parse tree
	 */
	exitPermission_id?: (ctx: Permission_idContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.permission_name`.
	 * @param ctx the parse tree
	 */
	enterPermission_name?: (ctx: Permission_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.permission_name`.
	 * @param ctx the parse tree
	 */
	exitPermission_name?: (ctx: Permission_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.permission_name_target`.
	 * @param ctx the parse tree
	 */
	enterPermission_name_target?: (ctx: Permission_name_targetContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.permission_name_target`.
	 * @param ctx the parse tree
	 */
	exitPermission_name_target?: (ctx: Permission_name_targetContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_resource_pool_stmt?: (ctx: Create_resource_pool_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_resource_pool_stmt?: (ctx: Create_resource_pool_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_resource_pool_stmt?: (ctx: Alter_resource_pool_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_resource_pool_stmt?: (ctx: Alter_resource_pool_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_resource_pool_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_resource_pool_action?: (ctx: Alter_resource_pool_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_resource_pool_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_resource_pool_action?: (ctx: Alter_resource_pool_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_resource_pool_stmt?: (ctx: Drop_resource_pool_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_resource_pool_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_resource_pool_stmt?: (ctx: Drop_resource_pool_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_resource_pool_classifier_stmt?: (ctx: Create_resource_pool_classifier_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_resource_pool_classifier_stmt?: (ctx: Create_resource_pool_classifier_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_resource_pool_classifier_stmt?: (ctx: Alter_resource_pool_classifier_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_resource_pool_classifier_stmt?: (ctx: Alter_resource_pool_classifier_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_resource_pool_classifier_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_resource_pool_classifier_action?: (ctx: Alter_resource_pool_classifier_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_resource_pool_classifier_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_resource_pool_classifier_action?: (ctx: Alter_resource_pool_classifier_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_resource_pool_classifier_stmt?: (ctx: Drop_resource_pool_classifier_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_resource_pool_classifier_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_resource_pool_classifier_stmt?: (ctx: Drop_resource_pool_classifier_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_replication_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_replication_stmt?: (ctx: Create_replication_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_replication_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_replication_stmt?: (ctx: Create_replication_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.replication_target`.
	 * @param ctx the parse tree
	 */
	enterReplication_target?: (ctx: Replication_targetContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.replication_target`.
	 * @param ctx the parse tree
	 */
	exitReplication_target?: (ctx: Replication_targetContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.replication_settings`.
	 * @param ctx the parse tree
	 */
	enterReplication_settings?: (ctx: Replication_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.replication_settings`.
	 * @param ctx the parse tree
	 */
	exitReplication_settings?: (ctx: Replication_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.replication_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterReplication_settings_entry?: (ctx: Replication_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.replication_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitReplication_settings_entry?: (ctx: Replication_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_replication_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_replication_stmt?: (ctx: Alter_replication_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_replication_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_replication_stmt?: (ctx: Alter_replication_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_replication_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_replication_action?: (ctx: Alter_replication_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_replication_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_replication_action?: (ctx: Alter_replication_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_replication_set_setting`.
	 * @param ctx the parse tree
	 */
	enterAlter_replication_set_setting?: (ctx: Alter_replication_set_settingContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_replication_set_setting`.
	 * @param ctx the parse tree
	 */
	exitAlter_replication_set_setting?: (ctx: Alter_replication_set_settingContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_replication_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_replication_stmt?: (ctx: Drop_replication_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_replication_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_replication_stmt?: (ctx: Drop_replication_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.action_or_subquery_args`.
	 * @param ctx the parse tree
	 */
	enterAction_or_subquery_args?: (ctx: Action_or_subquery_argsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.action_or_subquery_args`.
	 * @param ctx the parse tree
	 */
	exitAction_or_subquery_args?: (ctx: Action_or_subquery_argsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.define_action_or_subquery_stmt`.
	 * @param ctx the parse tree
	 */
	enterDefine_action_or_subquery_stmt?: (ctx: Define_action_or_subquery_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.define_action_or_subquery_stmt`.
	 * @param ctx the parse tree
	 */
	exitDefine_action_or_subquery_stmt?: (ctx: Define_action_or_subquery_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.define_action_or_subquery_body`.
	 * @param ctx the parse tree
	 */
	enterDefine_action_or_subquery_body?: (ctx: Define_action_or_subquery_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.define_action_or_subquery_body`.
	 * @param ctx the parse tree
	 */
	exitDefine_action_or_subquery_body?: (ctx: Define_action_or_subquery_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_ref`.
	 * @param ctx the parse tree
	 */
	enterTable_ref?: (ctx: Table_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_ref`.
	 * @param ctx the parse tree
	 */
	exitTable_ref?: (ctx: Table_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_key`.
	 * @param ctx the parse tree
	 */
	enterTable_key?: (ctx: Table_keyContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_key`.
	 * @param ctx the parse tree
	 */
	exitTable_key?: (ctx: Table_keyContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_arg`.
	 * @param ctx the parse tree
	 */
	enterTable_arg?: (ctx: Table_argContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_arg`.
	 * @param ctx the parse tree
	 */
	exitTable_arg?: (ctx: Table_argContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_hints`.
	 * @param ctx the parse tree
	 */
	enterTable_hints?: (ctx: Table_hintsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_hints`.
	 * @param ctx the parse tree
	 */
	exitTable_hints?: (ctx: Table_hintsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.table_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_hint?: (ctx: Table_hintContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.table_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_hint?: (ctx: Table_hintContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.object_ref`.
	 * @param ctx the parse tree
	 */
	enterObject_ref?: (ctx: Object_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.object_ref`.
	 * @param ctx the parse tree
	 */
	exitObject_ref?: (ctx: Object_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.simple_table_ref_core`.
	 * @param ctx the parse tree
	 */
	enterSimple_table_ref_core?: (ctx: Simple_table_ref_coreContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.simple_table_ref_core`.
	 * @param ctx the parse tree
	 */
	exitSimple_table_ref_core?: (ctx: Simple_table_ref_coreContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.simple_table_ref`.
	 * @param ctx the parse tree
	 */
	enterSimple_table_ref?: (ctx: Simple_table_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.simple_table_ref`.
	 * @param ctx the parse tree
	 */
	exitSimple_table_ref?: (ctx: Simple_table_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.into_simple_table_ref`.
	 * @param ctx the parse tree
	 */
	enterInto_simple_table_ref?: (ctx: Into_simple_table_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.into_simple_table_ref`.
	 * @param ctx the parse tree
	 */
	exitInto_simple_table_ref?: (ctx: Into_simple_table_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt?: (ctx: Delete_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt?: (ctx: Delete_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt?: (ctx: Update_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt?: (ctx: Update_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.set_clause_choice`.
	 * @param ctx the parse tree
	 */
	enterSet_clause_choice?: (ctx: Set_clause_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.set_clause_choice`.
	 * @param ctx the parse tree
	 */
	exitSet_clause_choice?: (ctx: Set_clause_choiceContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.set_clause_list`.
	 * @param ctx the parse tree
	 */
	enterSet_clause_list?: (ctx: Set_clause_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.set_clause_list`.
	 * @param ctx the parse tree
	 */
	exitSet_clause_list?: (ctx: Set_clause_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.set_clause`.
	 * @param ctx the parse tree
	 */
	enterSet_clause?: (ctx: Set_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.set_clause`.
	 * @param ctx the parse tree
	 */
	exitSet_clause?: (ctx: Set_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.set_target`.
	 * @param ctx the parse tree
	 */
	enterSet_target?: (ctx: Set_targetContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.set_target`.
	 * @param ctx the parse tree
	 */
	exitSet_target?: (ctx: Set_targetContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.multiple_column_assignment`.
	 * @param ctx the parse tree
	 */
	enterMultiple_column_assignment?: (ctx: Multiple_column_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.multiple_column_assignment`.
	 * @param ctx the parse tree
	 */
	exitMultiple_column_assignment?: (ctx: Multiple_column_assignmentContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.set_target_list`.
	 * @param ctx the parse tree
	 */
	enterSet_target_list?: (ctx: Set_target_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.set_target_list`.
	 * @param ctx the parse tree
	 */
	exitSet_target_list?: (ctx: Set_target_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_topic_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_topic_stmt?: (ctx: Create_topic_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_topic_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_topic_stmt?: (ctx: Create_topic_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_topic_entries`.
	 * @param ctx the parse tree
	 */
	enterCreate_topic_entries?: (ctx: Create_topic_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_topic_entries`.
	 * @param ctx the parse tree
	 */
	exitCreate_topic_entries?: (ctx: Create_topic_entriesContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.create_topic_entry`.
	 * @param ctx the parse tree
	 */
	enterCreate_topic_entry?: (ctx: Create_topic_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.create_topic_entry`.
	 * @param ctx the parse tree
	 */
	exitCreate_topic_entry?: (ctx: Create_topic_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.with_topic_settings`.
	 * @param ctx the parse tree
	 */
	enterWith_topic_settings?: (ctx: With_topic_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.with_topic_settings`.
	 * @param ctx the parse tree
	 */
	exitWith_topic_settings?: (ctx: With_topic_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_stmt?: (ctx: Alter_topic_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_stmt?: (ctx: Alter_topic_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_action?: (ctx: Alter_topic_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_action?: (ctx: Alter_topic_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_add_consumer`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_add_consumer?: (ctx: Alter_topic_add_consumerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_add_consumer`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_add_consumer?: (ctx: Alter_topic_add_consumerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_create_consumer_entry`.
	 * @param ctx the parse tree
	 */
	enterTopic_create_consumer_entry?: (ctx: Topic_create_consumer_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_create_consumer_entry`.
	 * @param ctx the parse tree
	 */
	exitTopic_create_consumer_entry?: (ctx: Topic_create_consumer_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_alter_consumer`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_alter_consumer?: (ctx: Alter_topic_alter_consumerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_alter_consumer`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_alter_consumer?: (ctx: Alter_topic_alter_consumerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_alter_consumer_entry`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_alter_consumer_entry?: (ctx: Alter_topic_alter_consumer_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_alter_consumer_entry`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_alter_consumer_entry?: (ctx: Alter_topic_alter_consumer_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_drop_consumer`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_drop_consumer?: (ctx: Alter_topic_drop_consumerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_drop_consumer`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_drop_consumer?: (ctx: Alter_topic_drop_consumerContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_alter_consumer_set`.
	 * @param ctx the parse tree
	 */
	enterTopic_alter_consumer_set?: (ctx: Topic_alter_consumer_setContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_alter_consumer_set`.
	 * @param ctx the parse tree
	 */
	exitTopic_alter_consumer_set?: (ctx: Topic_alter_consumer_setContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_alter_consumer_reset`.
	 * @param ctx the parse tree
	 */
	enterTopic_alter_consumer_reset?: (ctx: Topic_alter_consumer_resetContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_alter_consumer_reset`.
	 * @param ctx the parse tree
	 */
	exitTopic_alter_consumer_reset?: (ctx: Topic_alter_consumer_resetContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_set_settings`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_set_settings?: (ctx: Alter_topic_set_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_set_settings`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_set_settings?: (ctx: Alter_topic_set_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_topic_reset_settings`.
	 * @param ctx the parse tree
	 */
	enterAlter_topic_reset_settings?: (ctx: Alter_topic_reset_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_topic_reset_settings`.
	 * @param ctx the parse tree
	 */
	exitAlter_topic_reset_settings?: (ctx: Alter_topic_reset_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.drop_topic_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_topic_stmt?: (ctx: Drop_topic_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.drop_topic_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_topic_stmt?: (ctx: Drop_topic_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_settings`.
	 * @param ctx the parse tree
	 */
	enterTopic_settings?: (ctx: Topic_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_settings`.
	 * @param ctx the parse tree
	 */
	exitTopic_settings?: (ctx: Topic_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterTopic_settings_entry?: (ctx: Topic_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitTopic_settings_entry?: (ctx: Topic_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_setting_value`.
	 * @param ctx the parse tree
	 */
	enterTopic_setting_value?: (ctx: Topic_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_setting_value`.
	 * @param ctx the parse tree
	 */
	exitTopic_setting_value?: (ctx: Topic_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_consumer_with_settings`.
	 * @param ctx the parse tree
	 */
	enterTopic_consumer_with_settings?: (ctx: Topic_consumer_with_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_consumer_with_settings`.
	 * @param ctx the parse tree
	 */
	exitTopic_consumer_with_settings?: (ctx: Topic_consumer_with_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_consumer_settings`.
	 * @param ctx the parse tree
	 */
	enterTopic_consumer_settings?: (ctx: Topic_consumer_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_consumer_settings`.
	 * @param ctx the parse tree
	 */
	exitTopic_consumer_settings?: (ctx: Topic_consumer_settingsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_consumer_settings_entry`.
	 * @param ctx the parse tree
	 */
	enterTopic_consumer_settings_entry?: (ctx: Topic_consumer_settings_entryContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_consumer_settings_entry`.
	 * @param ctx the parse tree
	 */
	exitTopic_consumer_settings_entry?: (ctx: Topic_consumer_settings_entryContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_consumer_setting_value`.
	 * @param ctx the parse tree
	 */
	enterTopic_consumer_setting_value?: (ctx: Topic_consumer_setting_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_consumer_setting_value`.
	 * @param ctx the parse tree
	 */
	exitTopic_consumer_setting_value?: (ctx: Topic_consumer_setting_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_ref`.
	 * @param ctx the parse tree
	 */
	enterTopic_ref?: (ctx: Topic_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_ref`.
	 * @param ctx the parse tree
	 */
	exitTopic_ref?: (ctx: Topic_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.topic_consumer_ref`.
	 * @param ctx the parse tree
	 */
	enterTopic_consumer_ref?: (ctx: Topic_consumer_refContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.topic_consumer_ref`.
	 * @param ctx the parse tree
	 */
	exitTopic_consumer_ref?: (ctx: Topic_consumer_refContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.null_treatment`.
	 * @param ctx the parse tree
	 */
	enterNull_treatment?: (ctx: Null_treatmentContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.null_treatment`.
	 * @param ctx the parse tree
	 */
	exitNull_treatment?: (ctx: Null_treatmentContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.filter_clause`.
	 * @param ctx the parse tree
	 */
	enterFilter_clause?: (ctx: Filter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.filter_clause`.
	 * @param ctx the parse tree
	 */
	exitFilter_clause?: (ctx: Filter_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_name_or_specification`.
	 * @param ctx the parse tree
	 */
	enterWindow_name_or_specification?: (ctx: Window_name_or_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_name_or_specification`.
	 * @param ctx the parse tree
	 */
	exitWindow_name_or_specification?: (ctx: Window_name_or_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_name`.
	 * @param ctx the parse tree
	 */
	enterWindow_name?: (ctx: Window_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_name`.
	 * @param ctx the parse tree
	 */
	exitWindow_name?: (ctx: Window_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_clause?: (ctx: Window_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_clause?: (ctx: Window_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_definition_list`.
	 * @param ctx the parse tree
	 */
	enterWindow_definition_list?: (ctx: Window_definition_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_definition_list`.
	 * @param ctx the parse tree
	 */
	exitWindow_definition_list?: (ctx: Window_definition_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_definition`.
	 * @param ctx the parse tree
	 */
	enterWindow_definition?: (ctx: Window_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_definition`.
	 * @param ctx the parse tree
	 */
	exitWindow_definition?: (ctx: Window_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.new_window_name`.
	 * @param ctx the parse tree
	 */
	enterNew_window_name?: (ctx: New_window_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.new_window_name`.
	 * @param ctx the parse tree
	 */
	exitNew_window_name?: (ctx: New_window_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_specification`.
	 * @param ctx the parse tree
	 */
	enterWindow_specification?: (ctx: Window_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_specification`.
	 * @param ctx the parse tree
	 */
	exitWindow_specification?: (ctx: Window_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_specification_details`.
	 * @param ctx the parse tree
	 */
	enterWindow_specification_details?: (ctx: Window_specification_detailsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_specification_details`.
	 * @param ctx the parse tree
	 */
	exitWindow_specification_details?: (ctx: Window_specification_detailsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.existing_window_name`.
	 * @param ctx the parse tree
	 */
	enterExisting_window_name?: (ctx: Existing_window_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.existing_window_name`.
	 * @param ctx the parse tree
	 */
	exitExisting_window_name?: (ctx: Existing_window_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_partition_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_partition_clause?: (ctx: Window_partition_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_partition_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_partition_clause?: (ctx: Window_partition_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_order_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_order_clause?: (ctx: Window_order_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_order_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_order_clause?: (ctx: Window_order_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_clause?: (ctx: Window_frame_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_clause?: (ctx: Window_frame_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_units`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_units?: (ctx: Window_frame_unitsContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_units`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_units?: (ctx: Window_frame_unitsContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_between`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_between?: (ctx: Window_frame_betweenContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_between`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_between?: (ctx: Window_frame_betweenContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.window_frame_exclusion`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_exclusion?: (ctx: Window_frame_exclusionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.window_frame_exclusion`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_exclusion?: (ctx: Window_frame_exclusionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	enterUse_stmt?: (ctx: Use_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.use_stmt`.
	 * @param ctx the parse tree
	 */
	exitUse_stmt?: (ctx: Use_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.subselect_stmt`.
	 * @param ctx the parse tree
	 */
	enterSubselect_stmt?: (ctx: Subselect_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.subselect_stmt`.
	 * @param ctx the parse tree
	 */
	exitSubselect_stmt?: (ctx: Subselect_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.named_nodes_stmt`.
	 * @param ctx the parse tree
	 */
	enterNamed_nodes_stmt?: (ctx: Named_nodes_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.named_nodes_stmt`.
	 * @param ctx the parse tree
	 */
	exitNamed_nodes_stmt?: (ctx: Named_nodes_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.commit_stmt`.
	 * @param ctx the parse tree
	 */
	enterCommit_stmt?: (ctx: Commit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.commit_stmt`.
	 * @param ctx the parse tree
	 */
	exitCommit_stmt?: (ctx: Commit_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	enterRollback_stmt?: (ctx: Rollback_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	exitRollback_stmt?: (ctx: Rollback_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.analyze_table`.
	 * @param ctx the parse tree
	 */
	enterAnalyze_table?: (ctx: Analyze_tableContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.analyze_table`.
	 * @param ctx the parse tree
	 */
	exitAnalyze_table?: (ctx: Analyze_tableContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.analyze_table_list`.
	 * @param ctx the parse tree
	 */
	enterAnalyze_table_list?: (ctx: Analyze_table_listContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.analyze_table_list`.
	 * @param ctx the parse tree
	 */
	exitAnalyze_table_list?: (ctx: Analyze_table_listContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.analyze_stmt`.
	 * @param ctx the parse tree
	 */
	enterAnalyze_stmt?: (ctx: Analyze_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.analyze_stmt`.
	 * @param ctx the parse tree
	 */
	exitAnalyze_stmt?: (ctx: Analyze_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_sequence_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence_stmt?: (ctx: Alter_sequence_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_sequence_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence_stmt?: (ctx: Alter_sequence_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.alter_sequence_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence_action?: (ctx: Alter_sequence_actionContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.alter_sequence_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence_action?: (ctx: Alter_sequence_actionContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_schema`.
	 * @param ctx the parse tree
	 */
	enterId_schema?: (ctx: Id_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_schema`.
	 * @param ctx the parse tree
	 */
	exitId_schema?: (ctx: Id_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_expr`.
	 * @param ctx the parse tree
	 */
	enterId_expr?: (ctx: Id_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_expr`.
	 * @param ctx the parse tree
	 */
	exitId_expr?: (ctx: Id_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_expr_in`.
	 * @param ctx the parse tree
	 */
	enterId_expr_in?: (ctx: Id_expr_inContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_expr_in`.
	 * @param ctx the parse tree
	 */
	exitId_expr_in?: (ctx: Id_expr_inContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_window`.
	 * @param ctx the parse tree
	 */
	enterId_window?: (ctx: Id_windowContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_window`.
	 * @param ctx the parse tree
	 */
	exitId_window?: (ctx: Id_windowContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_table`.
	 * @param ctx the parse tree
	 */
	enterId_table?: (ctx: Id_tableContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_table`.
	 * @param ctx the parse tree
	 */
	exitId_table?: (ctx: Id_tableContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_without`.
	 * @param ctx the parse tree
	 */
	enterId_without?: (ctx: Id_withoutContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_without`.
	 * @param ctx the parse tree
	 */
	exitId_without?: (ctx: Id_withoutContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_hint`.
	 * @param ctx the parse tree
	 */
	enterId_hint?: (ctx: Id_hintContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_hint`.
	 * @param ctx the parse tree
	 */
	exitId_hint?: (ctx: Id_hintContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_as_compat`.
	 * @param ctx the parse tree
	 */
	enterId_as_compat?: (ctx: Id_as_compatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_as_compat`.
	 * @param ctx the parse tree
	 */
	exitId_as_compat?: (ctx: Id_as_compatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id`.
	 * @param ctx the parse tree
	 */
	enterAn_id?: (ctx: An_idContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id`.
	 * @param ctx the parse tree
	 */
	exitAn_id?: (ctx: An_idContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_or_type`.
	 * @param ctx the parse tree
	 */
	enterAn_id_or_type?: (ctx: An_id_or_typeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_or_type`.
	 * @param ctx the parse tree
	 */
	exitAn_id_or_type?: (ctx: An_id_or_typeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_schema`.
	 * @param ctx the parse tree
	 */
	enterAn_id_schema?: (ctx: An_id_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_schema`.
	 * @param ctx the parse tree
	 */
	exitAn_id_schema?: (ctx: An_id_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_expr`.
	 * @param ctx the parse tree
	 */
	enterAn_id_expr?: (ctx: An_id_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_expr`.
	 * @param ctx the parse tree
	 */
	exitAn_id_expr?: (ctx: An_id_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_expr_in`.
	 * @param ctx the parse tree
	 */
	enterAn_id_expr_in?: (ctx: An_id_expr_inContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_expr_in`.
	 * @param ctx the parse tree
	 */
	exitAn_id_expr_in?: (ctx: An_id_expr_inContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_window`.
	 * @param ctx the parse tree
	 */
	enterAn_id_window?: (ctx: An_id_windowContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_window`.
	 * @param ctx the parse tree
	 */
	exitAn_id_window?: (ctx: An_id_windowContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_table`.
	 * @param ctx the parse tree
	 */
	enterAn_id_table?: (ctx: An_id_tableContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_table`.
	 * @param ctx the parse tree
	 */
	exitAn_id_table?: (ctx: An_id_tableContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_without`.
	 * @param ctx the parse tree
	 */
	enterAn_id_without?: (ctx: An_id_withoutContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_without`.
	 * @param ctx the parse tree
	 */
	exitAn_id_without?: (ctx: An_id_withoutContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_hint`.
	 * @param ctx the parse tree
	 */
	enterAn_id_hint?: (ctx: An_id_hintContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_hint`.
	 * @param ctx the parse tree
	 */
	exitAn_id_hint?: (ctx: An_id_hintContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_pure`.
	 * @param ctx the parse tree
	 */
	enterAn_id_pure?: (ctx: An_id_pureContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_pure`.
	 * @param ctx the parse tree
	 */
	exitAn_id_pure?: (ctx: An_id_pureContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.an_id_as_compat`.
	 * @param ctx the parse tree
	 */
	enterAn_id_as_compat?: (ctx: An_id_as_compatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.an_id_as_compat`.
	 * @param ctx the parse tree
	 */
	exitAn_id_as_compat?: (ctx: An_id_as_compatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.view_name`.
	 * @param ctx the parse tree
	 */
	enterView_name?: (ctx: View_nameContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.view_name`.
	 * @param ctx the parse tree
	 */
	exitView_name?: (ctx: View_nameContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.opt_id_prefix`.
	 * @param ctx the parse tree
	 */
	enterOpt_id_prefix?: (ctx: Opt_id_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.opt_id_prefix`.
	 * @param ctx the parse tree
	 */
	exitOpt_id_prefix?: (ctx: Opt_id_prefixContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.cluster_expr`.
	 * @param ctx the parse tree
	 */
	enterCluster_expr?: (ctx: Cluster_exprContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.cluster_expr`.
	 * @param ctx the parse tree
	 */
	exitCluster_expr?: (ctx: Cluster_exprContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_or_type`.
	 * @param ctx the parse tree
	 */
	enterId_or_type?: (ctx: Id_or_typeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_or_type`.
	 * @param ctx the parse tree
	 */
	exitId_or_type?: (ctx: Id_or_typeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.opt_id_prefix_or_type`.
	 * @param ctx the parse tree
	 */
	enterOpt_id_prefix_or_type?: (ctx: Opt_id_prefix_or_typeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.opt_id_prefix_or_type`.
	 * @param ctx the parse tree
	 */
	exitOpt_id_prefix_or_type?: (ctx: Opt_id_prefix_or_typeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_or_at`.
	 * @param ctx the parse tree
	 */
	enterId_or_at?: (ctx: Id_or_atContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_or_at`.
	 * @param ctx the parse tree
	 */
	exitId_or_at?: (ctx: Id_or_atContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_table_or_type`.
	 * @param ctx the parse tree
	 */
	enterId_table_or_type?: (ctx: Id_table_or_typeContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_table_or_type`.
	 * @param ctx the parse tree
	 */
	exitId_table_or_type?: (ctx: Id_table_or_typeContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.id_table_or_at`.
	 * @param ctx the parse tree
	 */
	enterId_table_or_at?: (ctx: Id_table_or_atContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.id_table_or_at`.
	 * @param ctx the parse tree
	 */
	exitId_table_or_at?: (ctx: Id_table_or_atContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_expr_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_expr_uncompat?: (ctx: Keyword_expr_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_expr_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_expr_uncompat?: (ctx: Keyword_expr_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_table_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_table_uncompat?: (ctx: Keyword_table_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_table_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_table_uncompat?: (ctx: Keyword_table_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_select_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_select_uncompat?: (ctx: Keyword_select_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_select_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_select_uncompat?: (ctx: Keyword_select_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_alter_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_alter_uncompat?: (ctx: Keyword_alter_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_alter_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_alter_uncompat?: (ctx: Keyword_alter_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_in_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_in_uncompat?: (ctx: Keyword_in_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_in_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_in_uncompat?: (ctx: Keyword_in_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_window_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_window_uncompat?: (ctx: Keyword_window_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_window_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_window_uncompat?: (ctx: Keyword_window_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_hint_uncompat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_hint_uncompat?: (ctx: Keyword_hint_uncompatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_hint_uncompat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_hint_uncompat?: (ctx: Keyword_hint_uncompatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_as_compat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_as_compat?: (ctx: Keyword_as_compatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_as_compat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_as_compat?: (ctx: Keyword_as_compatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.keyword_compat`.
	 * @param ctx the parse tree
	 */
	enterKeyword_compat?: (ctx: Keyword_compatContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.keyword_compat`.
	 * @param ctx the parse tree
	 */
	exitKeyword_compat?: (ctx: Keyword_compatContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.type_id`.
	 * @param ctx the parse tree
	 */
	enterType_id?: (ctx: Type_idContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.type_id`.
	 * @param ctx the parse tree
	 */
	exitType_id?: (ctx: Type_idContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.bool_value`.
	 * @param ctx the parse tree
	 */
	enterBool_value?: (ctx: Bool_valueContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.bool_value`.
	 * @param ctx the parse tree
	 */
	exitBool_value?: (ctx: Bool_valueContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.real`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.real`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;
	/**
	 * Enter a parse tree produced by `YQLParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `YQLParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;
}

