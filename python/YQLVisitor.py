# Generated from YQL.g4 by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .YQLParser import YQLParser
else:
    from YQLParser import YQLParser

# This class defines a complete generic visitor for a parse tree produced by YQLParser.

class YQLVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by YQLParser#sql_query.
    def visitSql_query(self, ctx:YQLParser.Sql_queryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sql_stmt_list.
    def visitSql_stmt_list(self, ctx:YQLParser.Sql_stmt_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ansi_sql_stmt_list.
    def visitAnsi_sql_stmt_list(self, ctx:YQLParser.Ansi_sql_stmt_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#lambda_body.
    def visitLambda_body(self, ctx:YQLParser.Lambda_bodyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#lambda_stmt.
    def visitLambda_stmt(self, ctx:YQLParser.Lambda_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sql_stmt.
    def visitSql_stmt(self, ctx:YQLParser.Sql_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sql_stmt_core.
    def visitSql_stmt_core(self, ctx:YQLParser.Sql_stmt_coreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#expr.
    def visitExpr(self, ctx:YQLParser.ExprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#or_subexpr.
    def visitOr_subexpr(self, ctx:YQLParser.Or_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#and_subexpr.
    def visitAnd_subexpr(self, ctx:YQLParser.And_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#xor_subexpr.
    def visitXor_subexpr(self, ctx:YQLParser.Xor_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#distinct_from_op.
    def visitDistinct_from_op(self, ctx:YQLParser.Distinct_from_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#cond_expr.
    def visitCond_expr(self, ctx:YQLParser.Cond_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#match_op.
    def visitMatch_op(self, ctx:YQLParser.Match_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#eq_subexpr.
    def visitEq_subexpr(self, ctx:YQLParser.Eq_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#shift_right.
    def visitShift_right(self, ctx:YQLParser.Shift_rightContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#rot_right.
    def visitRot_right(self, ctx:YQLParser.Rot_rightContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#double_question.
    def visitDouble_question(self, ctx:YQLParser.Double_questionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#neq_subexpr.
    def visitNeq_subexpr(self, ctx:YQLParser.Neq_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#bit_subexpr.
    def visitBit_subexpr(self, ctx:YQLParser.Bit_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#add_subexpr.
    def visitAdd_subexpr(self, ctx:YQLParser.Add_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#mul_subexpr.
    def visitMul_subexpr(self, ctx:YQLParser.Mul_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#con_subexpr.
    def visitCon_subexpr(self, ctx:YQLParser.Con_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#unary_op.
    def visitUnary_op(self, ctx:YQLParser.Unary_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#unary_subexpr_suffix.
    def visitUnary_subexpr_suffix(self, ctx:YQLParser.Unary_subexpr_suffixContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#unary_casual_subexpr.
    def visitUnary_casual_subexpr(self, ctx:YQLParser.Unary_casual_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#in_unary_casual_subexpr.
    def visitIn_unary_casual_subexpr(self, ctx:YQLParser.In_unary_casual_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#unary_subexpr.
    def visitUnary_subexpr(self, ctx:YQLParser.Unary_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#in_unary_subexpr.
    def visitIn_unary_subexpr(self, ctx:YQLParser.In_unary_subexprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#list_literal.
    def visitList_literal(self, ctx:YQLParser.List_literalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#expr_dict_list.
    def visitExpr_dict_list(self, ctx:YQLParser.Expr_dict_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#dict_literal.
    def visitDict_literal(self, ctx:YQLParser.Dict_literalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#expr_struct_list.
    def visitExpr_struct_list(self, ctx:YQLParser.Expr_struct_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#struct_literal.
    def visitStruct_literal(self, ctx:YQLParser.Struct_literalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#atom_expr.
    def visitAtom_expr(self, ctx:YQLParser.Atom_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#in_atom_expr.
    def visitIn_atom_expr(self, ctx:YQLParser.In_atom_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#cast_expr.
    def visitCast_expr(self, ctx:YQLParser.Cast_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#bitcast_expr.
    def visitBitcast_expr(self, ctx:YQLParser.Bitcast_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#exists_expr.
    def visitExists_expr(self, ctx:YQLParser.Exists_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#case_expr.
    def visitCase_expr(self, ctx:YQLParser.Case_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#lambda.
    def visitLambda(self, ctx:YQLParser.LambdaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#in_expr.
    def visitIn_expr(self, ctx:YQLParser.In_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_api_expr.
    def visitJson_api_expr(self, ctx:YQLParser.Json_api_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#jsonpath_spec.
    def visitJsonpath_spec(self, ctx:YQLParser.Jsonpath_specContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_variable_name.
    def visitJson_variable_name(self, ctx:YQLParser.Json_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_variable.
    def visitJson_variable(self, ctx:YQLParser.Json_variableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_variables.
    def visitJson_variables(self, ctx:YQLParser.Json_variablesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_common_args.
    def visitJson_common_args(self, ctx:YQLParser.Json_common_argsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_case_handler.
    def visitJson_case_handler(self, ctx:YQLParser.Json_case_handlerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_value.
    def visitJson_value(self, ctx:YQLParser.Json_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_exists_handler.
    def visitJson_exists_handler(self, ctx:YQLParser.Json_exists_handlerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_exists.
    def visitJson_exists(self, ctx:YQLParser.Json_existsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_query_wrapper.
    def visitJson_query_wrapper(self, ctx:YQLParser.Json_query_wrapperContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_query_handler.
    def visitJson_query_handler(self, ctx:YQLParser.Json_query_handlerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#json_query.
    def visitJson_query(self, ctx:YQLParser.Json_queryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#smart_parenthesis.
    def visitSmart_parenthesis(self, ctx:YQLParser.Smart_parenthesisContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#expr_list.
    def visitExpr_list(self, ctx:YQLParser.Expr_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#pure_column_list.
    def visitPure_column_list(self, ctx:YQLParser.Pure_column_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#pure_column_or_named.
    def visitPure_column_or_named(self, ctx:YQLParser.Pure_column_or_namedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#pure_column_or_named_list.
    def visitPure_column_or_named_list(self, ctx:YQLParser.Pure_column_or_named_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#column_name.
    def visitColumn_name(self, ctx:YQLParser.Column_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#without_column_name.
    def visitWithout_column_name(self, ctx:YQLParser.Without_column_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#column_list.
    def visitColumn_list(self, ctx:YQLParser.Column_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#without_column_list.
    def visitWithout_column_list(self, ctx:YQLParser.Without_column_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_expr.
    def visitNamed_expr(self, ctx:YQLParser.Named_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_expr_list.
    def visitNamed_expr_list(self, ctx:YQLParser.Named_expr_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#invoke_expr.
    def visitInvoke_expr(self, ctx:YQLParser.Invoke_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#invoke_expr_tail.
    def visitInvoke_expr_tail(self, ctx:YQLParser.Invoke_expr_tailContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#using_call_expr.
    def visitUsing_call_expr(self, ctx:YQLParser.Using_call_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#key_expr.
    def visitKey_expr(self, ctx:YQLParser.Key_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#when_expr.
    def visitWhen_expr(self, ctx:YQLParser.When_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#literal_value.
    def visitLiteral_value(self, ctx:YQLParser.Literal_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#bind_parameter.
    def visitBind_parameter(self, ctx:YQLParser.Bind_parameterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#opt_bind_parameter.
    def visitOpt_bind_parameter(self, ctx:YQLParser.Opt_bind_parameterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#bind_parameter_list.
    def visitBind_parameter_list(self, ctx:YQLParser.Bind_parameter_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_bind_parameter.
    def visitNamed_bind_parameter(self, ctx:YQLParser.Named_bind_parameterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_bind_parameter_list.
    def visitNamed_bind_parameter_list(self, ctx:YQLParser.Named_bind_parameter_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#signed_number.
    def visitSigned_number(self, ctx:YQLParser.Signed_numberContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_simple.
    def visitType_name_simple(self, ctx:YQLParser.Type_name_simpleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#integer_or_bind.
    def visitInteger_or_bind(self, ctx:YQLParser.Integer_or_bindContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_tag.
    def visitType_name_tag(self, ctx:YQLParser.Type_name_tagContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#struct_arg.
    def visitStruct_arg(self, ctx:YQLParser.Struct_argContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#struct_arg_positional.
    def visitStruct_arg_positional(self, ctx:YQLParser.Struct_arg_positionalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#variant_arg.
    def visitVariant_arg(self, ctx:YQLParser.Variant_argContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#callable_arg.
    def visitCallable_arg(self, ctx:YQLParser.Callable_argContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#callable_arg_list.
    def visitCallable_arg_list(self, ctx:YQLParser.Callable_arg_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_decimal.
    def visitType_name_decimal(self, ctx:YQLParser.Type_name_decimalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_optional.
    def visitType_name_optional(self, ctx:YQLParser.Type_name_optionalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_tuple.
    def visitType_name_tuple(self, ctx:YQLParser.Type_name_tupleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_struct.
    def visitType_name_struct(self, ctx:YQLParser.Type_name_structContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_variant.
    def visitType_name_variant(self, ctx:YQLParser.Type_name_variantContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_list.
    def visitType_name_list(self, ctx:YQLParser.Type_name_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_stream.
    def visitType_name_stream(self, ctx:YQLParser.Type_name_streamContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_flow.
    def visitType_name_flow(self, ctx:YQLParser.Type_name_flowContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_dict.
    def visitType_name_dict(self, ctx:YQLParser.Type_name_dictContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_set.
    def visitType_name_set(self, ctx:YQLParser.Type_name_setContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_enum.
    def visitType_name_enum(self, ctx:YQLParser.Type_name_enumContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_resource.
    def visitType_name_resource(self, ctx:YQLParser.Type_name_resourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_tagged.
    def visitType_name_tagged(self, ctx:YQLParser.Type_name_taggedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_callable.
    def visitType_name_callable(self, ctx:YQLParser.Type_name_callableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_composite.
    def visitType_name_composite(self, ctx:YQLParser.Type_name_compositeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name.
    def visitType_name(self, ctx:YQLParser.Type_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_name_or_bind.
    def visitType_name_or_bind(self, ctx:YQLParser.Type_name_or_bindContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#value_constructor_literal.
    def visitValue_constructor_literal(self, ctx:YQLParser.Value_constructor_literalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#value_constructor.
    def visitValue_constructor(self, ctx:YQLParser.Value_constructorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#declare_stmt.
    def visitDeclare_stmt(self, ctx:YQLParser.Declare_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#module_path.
    def visitModule_path(self, ctx:YQLParser.Module_pathContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#import_stmt.
    def visitImport_stmt(self, ctx:YQLParser.Import_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#export_stmt.
    def visitExport_stmt(self, ctx:YQLParser.Export_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#call_action.
    def visitCall_action(self, ctx:YQLParser.Call_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#inline_action.
    def visitInline_action(self, ctx:YQLParser.Inline_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#do_stmt.
    def visitDo_stmt(self, ctx:YQLParser.Do_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#pragma_stmt.
    def visitPragma_stmt(self, ctx:YQLParser.Pragma_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#pragma_value.
    def visitPragma_value(self, ctx:YQLParser.Pragma_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sort_specification.
    def visitSort_specification(self, ctx:YQLParser.Sort_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sort_specification_list.
    def visitSort_specification_list(self, ctx:YQLParser.Sort_specification_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_stmt.
    def visitSelect_stmt(self, ctx:YQLParser.Select_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_unparenthesized_stmt.
    def visitSelect_unparenthesized_stmt(self, ctx:YQLParser.Select_unparenthesized_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_kind_parenthesis.
    def visitSelect_kind_parenthesis(self, ctx:YQLParser.Select_kind_parenthesisContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_op.
    def visitSelect_op(self, ctx:YQLParser.Select_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_kind_partial.
    def visitSelect_kind_partial(self, ctx:YQLParser.Select_kind_partialContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_kind.
    def visitSelect_kind(self, ctx:YQLParser.Select_kindContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#process_core.
    def visitProcess_core(self, ctx:YQLParser.Process_coreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#external_call_param.
    def visitExternal_call_param(self, ctx:YQLParser.External_call_paramContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#external_call_settings.
    def visitExternal_call_settings(self, ctx:YQLParser.External_call_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#reduce_core.
    def visitReduce_core(self, ctx:YQLParser.Reduce_coreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#opt_set_quantifier.
    def visitOpt_set_quantifier(self, ctx:YQLParser.Opt_set_quantifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#select_core.
    def visitSelect_core(self, ctx:YQLParser.Select_coreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_recognition_clause.
    def visitRow_pattern_recognition_clause(self, ctx:YQLParser.Row_pattern_recognition_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_rows_per_match.
    def visitRow_pattern_rows_per_match(self, ctx:YQLParser.Row_pattern_rows_per_matchContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_empty_match_handling.
    def visitRow_pattern_empty_match_handling(self, ctx:YQLParser.Row_pattern_empty_match_handlingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_measures.
    def visitRow_pattern_measures(self, ctx:YQLParser.Row_pattern_measuresContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_measure_list.
    def visitRow_pattern_measure_list(self, ctx:YQLParser.Row_pattern_measure_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_measure_definition.
    def visitRow_pattern_measure_definition(self, ctx:YQLParser.Row_pattern_measure_definitionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_common_syntax.
    def visitRow_pattern_common_syntax(self, ctx:YQLParser.Row_pattern_common_syntaxContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_skip_to.
    def visitRow_pattern_skip_to(self, ctx:YQLParser.Row_pattern_skip_toContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_skip_to_variable_name.
    def visitRow_pattern_skip_to_variable_name(self, ctx:YQLParser.Row_pattern_skip_to_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_initial_or_seek.
    def visitRow_pattern_initial_or_seek(self, ctx:YQLParser.Row_pattern_initial_or_seekContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern.
    def visitRow_pattern(self, ctx:YQLParser.Row_patternContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_term.
    def visitRow_pattern_term(self, ctx:YQLParser.Row_pattern_termContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_factor.
    def visitRow_pattern_factor(self, ctx:YQLParser.Row_pattern_factorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_quantifier.
    def visitRow_pattern_quantifier(self, ctx:YQLParser.Row_pattern_quantifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_primary.
    def visitRow_pattern_primary(self, ctx:YQLParser.Row_pattern_primaryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_primary_variable_name.
    def visitRow_pattern_primary_variable_name(self, ctx:YQLParser.Row_pattern_primary_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_permute.
    def visitRow_pattern_permute(self, ctx:YQLParser.Row_pattern_permuteContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_clause.
    def visitRow_pattern_subset_clause(self, ctx:YQLParser.Row_pattern_subset_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_list.
    def visitRow_pattern_subset_list(self, ctx:YQLParser.Row_pattern_subset_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_item.
    def visitRow_pattern_subset_item(self, ctx:YQLParser.Row_pattern_subset_itemContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_item_variable_name.
    def visitRow_pattern_subset_item_variable_name(self, ctx:YQLParser.Row_pattern_subset_item_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_rhs.
    def visitRow_pattern_subset_rhs(self, ctx:YQLParser.Row_pattern_subset_rhsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_subset_rhs_variable_name.
    def visitRow_pattern_subset_rhs_variable_name(self, ctx:YQLParser.Row_pattern_subset_rhs_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_definition_list.
    def visitRow_pattern_definition_list(self, ctx:YQLParser.Row_pattern_definition_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_definition.
    def visitRow_pattern_definition(self, ctx:YQLParser.Row_pattern_definitionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_definition_variable_name.
    def visitRow_pattern_definition_variable_name(self, ctx:YQLParser.Row_pattern_definition_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_definition_search_condition.
    def visitRow_pattern_definition_search_condition(self, ctx:YQLParser.Row_pattern_definition_search_conditionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#search_condition.
    def visitSearch_condition(self, ctx:YQLParser.Search_conditionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#row_pattern_variable_name.
    def visitRow_pattern_variable_name(self, ctx:YQLParser.Row_pattern_variable_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#order_by_clause.
    def visitOrder_by_clause(self, ctx:YQLParser.Order_by_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ext_order_by_clause.
    def visitExt_order_by_clause(self, ctx:YQLParser.Ext_order_by_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#group_by_clause.
    def visitGroup_by_clause(self, ctx:YQLParser.Group_by_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#grouping_element_list.
    def visitGrouping_element_list(self, ctx:YQLParser.Grouping_element_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#grouping_element.
    def visitGrouping_element(self, ctx:YQLParser.Grouping_elementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ordinary_grouping_set.
    def visitOrdinary_grouping_set(self, ctx:YQLParser.Ordinary_grouping_setContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ordinary_grouping_set_list.
    def visitOrdinary_grouping_set_list(self, ctx:YQLParser.Ordinary_grouping_set_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#rollup_list.
    def visitRollup_list(self, ctx:YQLParser.Rollup_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#cube_list.
    def visitCube_list(self, ctx:YQLParser.Cube_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#grouping_sets_specification.
    def visitGrouping_sets_specification(self, ctx:YQLParser.Grouping_sets_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#hopping_window_specification.
    def visitHopping_window_specification(self, ctx:YQLParser.Hopping_window_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#result_column.
    def visitResult_column(self, ctx:YQLParser.Result_columnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#join_source.
    def visitJoin_source(self, ctx:YQLParser.Join_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_column.
    def visitNamed_column(self, ctx:YQLParser.Named_columnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#flatten_by_arg.
    def visitFlatten_by_arg(self, ctx:YQLParser.Flatten_by_argContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#flatten_source.
    def visitFlatten_source(self, ctx:YQLParser.Flatten_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_single_source.
    def visitNamed_single_source(self, ctx:YQLParser.Named_single_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#single_source.
    def visitSingle_source(self, ctx:YQLParser.Single_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sample_clause.
    def visitSample_clause(self, ctx:YQLParser.Sample_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#tablesample_clause.
    def visitTablesample_clause(self, ctx:YQLParser.Tablesample_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#sampling_mode.
    def visitSampling_mode(self, ctx:YQLParser.Sampling_modeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#repeatable_clause.
    def visitRepeatable_clause(self, ctx:YQLParser.Repeatable_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#join_op.
    def visitJoin_op(self, ctx:YQLParser.Join_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#join_constraint.
    def visitJoin_constraint(self, ctx:YQLParser.Join_constraintContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#returning_columns_list.
    def visitReturning_columns_list(self, ctx:YQLParser.Returning_columns_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#into_table_stmt.
    def visitInto_table_stmt(self, ctx:YQLParser.Into_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#into_values_source.
    def visitInto_values_source(self, ctx:YQLParser.Into_values_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#values_stmt.
    def visitValues_stmt(self, ctx:YQLParser.Values_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#values_source.
    def visitValues_source(self, ctx:YQLParser.Values_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#values_source_row_list.
    def visitValues_source_row_list(self, ctx:YQLParser.Values_source_row_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#values_source_row.
    def visitValues_source_row(self, ctx:YQLParser.Values_source_rowContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#simple_values_source.
    def visitSimple_values_source(self, ctx:YQLParser.Simple_values_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_external_data_source_stmt.
    def visitCreate_external_data_source_stmt(self, ctx:YQLParser.Create_external_data_source_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_external_data_source_stmt.
    def visitAlter_external_data_source_stmt(self, ctx:YQLParser.Alter_external_data_source_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_external_data_source_action.
    def visitAlter_external_data_source_action(self, ctx:YQLParser.Alter_external_data_source_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_external_data_source_stmt.
    def visitDrop_external_data_source_stmt(self, ctx:YQLParser.Drop_external_data_source_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_view_stmt.
    def visitCreate_view_stmt(self, ctx:YQLParser.Create_view_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_view_stmt.
    def visitDrop_view_stmt(self, ctx:YQLParser.Drop_view_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#upsert_object_stmt.
    def visitUpsert_object_stmt(self, ctx:YQLParser.Upsert_object_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_object_stmt.
    def visitCreate_object_stmt(self, ctx:YQLParser.Create_object_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_object_features.
    def visitCreate_object_features(self, ctx:YQLParser.Create_object_featuresContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_object_stmt.
    def visitAlter_object_stmt(self, ctx:YQLParser.Alter_object_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_object_features.
    def visitAlter_object_features(self, ctx:YQLParser.Alter_object_featuresContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_object_stmt.
    def visitDrop_object_stmt(self, ctx:YQLParser.Drop_object_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_object_features.
    def visitDrop_object_features(self, ctx:YQLParser.Drop_object_featuresContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_feature_value.
    def visitObject_feature_value(self, ctx:YQLParser.Object_feature_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_feature_kv.
    def visitObject_feature_kv(self, ctx:YQLParser.Object_feature_kvContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_feature_flag.
    def visitObject_feature_flag(self, ctx:YQLParser.Object_feature_flagContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_feature.
    def visitObject_feature(self, ctx:YQLParser.Object_featureContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_features.
    def visitObject_features(self, ctx:YQLParser.Object_featuresContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_type_ref.
    def visitObject_type_ref(self, ctx:YQLParser.Object_type_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_table_stmt.
    def visitCreate_table_stmt(self, ctx:YQLParser.Create_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_table_entry.
    def visitCreate_table_entry(self, ctx:YQLParser.Create_table_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_backup_collection_stmt.
    def visitCreate_backup_collection_stmt(self, ctx:YQLParser.Create_backup_collection_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_backup_collection_stmt.
    def visitAlter_backup_collection_stmt(self, ctx:YQLParser.Alter_backup_collection_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_backup_collection_stmt.
    def visitDrop_backup_collection_stmt(self, ctx:YQLParser.Drop_backup_collection_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_backup_collection_entries.
    def visitCreate_backup_collection_entries(self, ctx:YQLParser.Create_backup_collection_entriesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_backup_collection_entries_many.
    def visitCreate_backup_collection_entries_many(self, ctx:YQLParser.Create_backup_collection_entries_manyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_list.
    def visitTable_list(self, ctx:YQLParser.Table_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_backup_collection_actions.
    def visitAlter_backup_collection_actions(self, ctx:YQLParser.Alter_backup_collection_actionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_backup_collection_action.
    def visitAlter_backup_collection_action(self, ctx:YQLParser.Alter_backup_collection_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_backup_collection_entries.
    def visitAlter_backup_collection_entries(self, ctx:YQLParser.Alter_backup_collection_entriesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_backup_collection_entry.
    def visitAlter_backup_collection_entry(self, ctx:YQLParser.Alter_backup_collection_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#backup_collection.
    def visitBackup_collection(self, ctx:YQLParser.Backup_collectionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#backup_collection_settings.
    def visitBackup_collection_settings(self, ctx:YQLParser.Backup_collection_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#backup_collection_settings_entry.
    def visitBackup_collection_settings_entry(self, ctx:YQLParser.Backup_collection_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#backup_stmt.
    def visitBackup_stmt(self, ctx:YQLParser.Backup_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#restore_stmt.
    def visitRestore_stmt(self, ctx:YQLParser.Restore_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_database_stmt.
    def visitAlter_database_stmt(self, ctx:YQLParser.Alter_database_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_inherits.
    def visitTable_inherits(self, ctx:YQLParser.Table_inheritsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_partition_by.
    def visitTable_partition_by(self, ctx:YQLParser.Table_partition_byContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#with_table_settings.
    def visitWith_table_settings(self, ctx:YQLParser.With_table_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_tablestore.
    def visitTable_tablestore(self, ctx:YQLParser.Table_tablestoreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_settings_entry.
    def visitTable_settings_entry(self, ctx:YQLParser.Table_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_as_source.
    def visitTable_as_source(self, ctx:YQLParser.Table_as_sourceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_stmt.
    def visitAlter_table_stmt(self, ctx:YQLParser.Alter_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_action.
    def visitAlter_table_action(self, ctx:YQLParser.Alter_table_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_external_table_stmt.
    def visitAlter_external_table_stmt(self, ctx:YQLParser.Alter_external_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_external_table_action.
    def visitAlter_external_table_action(self, ctx:YQLParser.Alter_external_table_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_store_stmt.
    def visitAlter_table_store_stmt(self, ctx:YQLParser.Alter_table_store_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_store_action.
    def visitAlter_table_store_action(self, ctx:YQLParser.Alter_table_store_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_add_column.
    def visitAlter_table_add_column(self, ctx:YQLParser.Alter_table_add_columnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_drop_column.
    def visitAlter_table_drop_column(self, ctx:YQLParser.Alter_table_drop_columnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_column.
    def visitAlter_table_alter_column(self, ctx:YQLParser.Alter_table_alter_columnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_column_drop_not_null.
    def visitAlter_table_alter_column_drop_not_null(self, ctx:YQLParser.Alter_table_alter_column_drop_not_nullContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_add_column_family.
    def visitAlter_table_add_column_family(self, ctx:YQLParser.Alter_table_add_column_familyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_column_family.
    def visitAlter_table_alter_column_family(self, ctx:YQLParser.Alter_table_alter_column_familyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_set_table_setting_uncompat.
    def visitAlter_table_set_table_setting_uncompat(self, ctx:YQLParser.Alter_table_set_table_setting_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_set_table_setting_compat.
    def visitAlter_table_set_table_setting_compat(self, ctx:YQLParser.Alter_table_set_table_setting_compatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_reset_table_setting.
    def visitAlter_table_reset_table_setting(self, ctx:YQLParser.Alter_table_reset_table_settingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_add_index.
    def visitAlter_table_add_index(self, ctx:YQLParser.Alter_table_add_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_drop_index.
    def visitAlter_table_drop_index(self, ctx:YQLParser.Alter_table_drop_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_rename_to.
    def visitAlter_table_rename_to(self, ctx:YQLParser.Alter_table_rename_toContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_rename_index_to.
    def visitAlter_table_rename_index_to(self, ctx:YQLParser.Alter_table_rename_index_toContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_add_changefeed.
    def visitAlter_table_add_changefeed(self, ctx:YQLParser.Alter_table_add_changefeedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_changefeed.
    def visitAlter_table_alter_changefeed(self, ctx:YQLParser.Alter_table_alter_changefeedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_drop_changefeed.
    def visitAlter_table_drop_changefeed(self, ctx:YQLParser.Alter_table_drop_changefeedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_index.
    def visitAlter_table_alter_index(self, ctx:YQLParser.Alter_table_alter_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#column_schema.
    def visitColumn_schema(self, ctx:YQLParser.Column_schemaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#family_relation.
    def visitFamily_relation(self, ctx:YQLParser.Family_relationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#opt_column_constraints.
    def visitOpt_column_constraints(self, ctx:YQLParser.Opt_column_constraintsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#column_order_by_specification.
    def visitColumn_order_by_specification(self, ctx:YQLParser.Column_order_by_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_constraint.
    def visitTable_constraint(self, ctx:YQLParser.Table_constraintContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_index.
    def visitTable_index(self, ctx:YQLParser.Table_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_index_type.
    def visitTable_index_type(self, ctx:YQLParser.Table_index_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#global_index.
    def visitGlobal_index(self, ctx:YQLParser.Global_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#local_index.
    def visitLocal_index(self, ctx:YQLParser.Local_indexContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#index_subtype.
    def visitIndex_subtype(self, ctx:YQLParser.Index_subtypeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#with_index_settings.
    def visitWith_index_settings(self, ctx:YQLParser.With_index_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#index_setting_entry.
    def visitIndex_setting_entry(self, ctx:YQLParser.Index_setting_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#index_setting_value.
    def visitIndex_setting_value(self, ctx:YQLParser.Index_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#changefeed.
    def visitChangefeed(self, ctx:YQLParser.ChangefeedContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#changefeed_settings.
    def visitChangefeed_settings(self, ctx:YQLParser.Changefeed_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#changefeed_settings_entry.
    def visitChangefeed_settings_entry(self, ctx:YQLParser.Changefeed_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#changefeed_setting_value.
    def visitChangefeed_setting_value(self, ctx:YQLParser.Changefeed_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#changefeed_alter_settings.
    def visitChangefeed_alter_settings(self, ctx:YQLParser.Changefeed_alter_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_setting_entry.
    def visitAlter_table_setting_entry(self, ctx:YQLParser.Alter_table_setting_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_setting_value.
    def visitTable_setting_value(self, ctx:YQLParser.Table_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ttl_tier_list.
    def visitTtl_tier_list(self, ctx:YQLParser.Ttl_tier_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#ttl_tier_action.
    def visitTtl_tier_action(self, ctx:YQLParser.Ttl_tier_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#family_entry.
    def visitFamily_entry(self, ctx:YQLParser.Family_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#family_settings.
    def visitFamily_settings(self, ctx:YQLParser.Family_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#family_settings_entry.
    def visitFamily_settings_entry(self, ctx:YQLParser.Family_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#family_setting_value.
    def visitFamily_setting_value(self, ctx:YQLParser.Family_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#split_boundaries.
    def visitSplit_boundaries(self, ctx:YQLParser.Split_boundariesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#literal_value_list.
    def visitLiteral_value_list(self, ctx:YQLParser.Literal_value_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_table_alter_index_action.
    def visitAlter_table_alter_index_action(self, ctx:YQLParser.Alter_table_alter_index_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_table_stmt.
    def visitDrop_table_stmt(self, ctx:YQLParser.Drop_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_user_stmt.
    def visitCreate_user_stmt(self, ctx:YQLParser.Create_user_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_user_stmt.
    def visitAlter_user_stmt(self, ctx:YQLParser.Alter_user_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_group_stmt.
    def visitCreate_group_stmt(self, ctx:YQLParser.Create_group_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_group_stmt.
    def visitAlter_group_stmt(self, ctx:YQLParser.Alter_group_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_role_stmt.
    def visitDrop_role_stmt(self, ctx:YQLParser.Drop_role_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#role_name.
    def visitRole_name(self, ctx:YQLParser.Role_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#user_option.
    def visitUser_option(self, ctx:YQLParser.User_optionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#authentication_option.
    def visitAuthentication_option(self, ctx:YQLParser.Authentication_optionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#password_option.
    def visitPassword_option(self, ctx:YQLParser.Password_optionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#password_value.
    def visitPassword_value(self, ctx:YQLParser.Password_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#hash_option.
    def visitHash_option(self, ctx:YQLParser.Hash_optionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#login_option.
    def visitLogin_option(self, ctx:YQLParser.Login_optionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#grant_permissions_stmt.
    def visitGrant_permissions_stmt(self, ctx:YQLParser.Grant_permissions_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#revoke_permissions_stmt.
    def visitRevoke_permissions_stmt(self, ctx:YQLParser.Revoke_permissions_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#permission_id.
    def visitPermission_id(self, ctx:YQLParser.Permission_idContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#permission_name.
    def visitPermission_name(self, ctx:YQLParser.Permission_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#permission_name_target.
    def visitPermission_name_target(self, ctx:YQLParser.Permission_name_targetContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_resource_pool_stmt.
    def visitCreate_resource_pool_stmt(self, ctx:YQLParser.Create_resource_pool_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_resource_pool_stmt.
    def visitAlter_resource_pool_stmt(self, ctx:YQLParser.Alter_resource_pool_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_resource_pool_action.
    def visitAlter_resource_pool_action(self, ctx:YQLParser.Alter_resource_pool_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_resource_pool_stmt.
    def visitDrop_resource_pool_stmt(self, ctx:YQLParser.Drop_resource_pool_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_resource_pool_classifier_stmt.
    def visitCreate_resource_pool_classifier_stmt(self, ctx:YQLParser.Create_resource_pool_classifier_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_resource_pool_classifier_stmt.
    def visitAlter_resource_pool_classifier_stmt(self, ctx:YQLParser.Alter_resource_pool_classifier_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_resource_pool_classifier_action.
    def visitAlter_resource_pool_classifier_action(self, ctx:YQLParser.Alter_resource_pool_classifier_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_resource_pool_classifier_stmt.
    def visitDrop_resource_pool_classifier_stmt(self, ctx:YQLParser.Drop_resource_pool_classifier_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_replication_stmt.
    def visitCreate_replication_stmt(self, ctx:YQLParser.Create_replication_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#replication_target.
    def visitReplication_target(self, ctx:YQLParser.Replication_targetContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#replication_settings.
    def visitReplication_settings(self, ctx:YQLParser.Replication_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#replication_settings_entry.
    def visitReplication_settings_entry(self, ctx:YQLParser.Replication_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_replication_stmt.
    def visitAlter_replication_stmt(self, ctx:YQLParser.Alter_replication_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_replication_action.
    def visitAlter_replication_action(self, ctx:YQLParser.Alter_replication_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_replication_set_setting.
    def visitAlter_replication_set_setting(self, ctx:YQLParser.Alter_replication_set_settingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_replication_stmt.
    def visitDrop_replication_stmt(self, ctx:YQLParser.Drop_replication_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#lambda_or_parameter.
    def visitLambda_or_parameter(self, ctx:YQLParser.Lambda_or_parameterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_transfer_stmt.
    def visitCreate_transfer_stmt(self, ctx:YQLParser.Create_transfer_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#transfer_settings.
    def visitTransfer_settings(self, ctx:YQLParser.Transfer_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#transfer_settings_entry.
    def visitTransfer_settings_entry(self, ctx:YQLParser.Transfer_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_transfer_stmt.
    def visitAlter_transfer_stmt(self, ctx:YQLParser.Alter_transfer_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_transfer_action.
    def visitAlter_transfer_action(self, ctx:YQLParser.Alter_transfer_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_transfer_set_setting.
    def visitAlter_transfer_set_setting(self, ctx:YQLParser.Alter_transfer_set_settingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_transfer_set_using.
    def visitAlter_transfer_set_using(self, ctx:YQLParser.Alter_transfer_set_usingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_transfer_stmt.
    def visitDrop_transfer_stmt(self, ctx:YQLParser.Drop_transfer_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#action_or_subquery_args.
    def visitAction_or_subquery_args(self, ctx:YQLParser.Action_or_subquery_argsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#define_action_or_subquery_stmt.
    def visitDefine_action_or_subquery_stmt(self, ctx:YQLParser.Define_action_or_subquery_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#define_action_or_subquery_body.
    def visitDefine_action_or_subquery_body(self, ctx:YQLParser.Define_action_or_subquery_bodyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#if_stmt.
    def visitIf_stmt(self, ctx:YQLParser.If_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#for_stmt.
    def visitFor_stmt(self, ctx:YQLParser.For_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_ref.
    def visitTable_ref(self, ctx:YQLParser.Table_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_key.
    def visitTable_key(self, ctx:YQLParser.Table_keyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_arg.
    def visitTable_arg(self, ctx:YQLParser.Table_argContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_hints.
    def visitTable_hints(self, ctx:YQLParser.Table_hintsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#table_hint.
    def visitTable_hint(self, ctx:YQLParser.Table_hintContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#object_ref.
    def visitObject_ref(self, ctx:YQLParser.Object_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#simple_table_ref_core.
    def visitSimple_table_ref_core(self, ctx:YQLParser.Simple_table_ref_coreContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#simple_table_ref.
    def visitSimple_table_ref(self, ctx:YQLParser.Simple_table_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#into_simple_table_ref.
    def visitInto_simple_table_ref(self, ctx:YQLParser.Into_simple_table_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#delete_stmt.
    def visitDelete_stmt(self, ctx:YQLParser.Delete_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#update_stmt.
    def visitUpdate_stmt(self, ctx:YQLParser.Update_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#set_clause_choice.
    def visitSet_clause_choice(self, ctx:YQLParser.Set_clause_choiceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#set_clause_list.
    def visitSet_clause_list(self, ctx:YQLParser.Set_clause_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#set_clause.
    def visitSet_clause(self, ctx:YQLParser.Set_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#set_target.
    def visitSet_target(self, ctx:YQLParser.Set_targetContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#multiple_column_assignment.
    def visitMultiple_column_assignment(self, ctx:YQLParser.Multiple_column_assignmentContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#set_target_list.
    def visitSet_target_list(self, ctx:YQLParser.Set_target_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_topic_stmt.
    def visitCreate_topic_stmt(self, ctx:YQLParser.Create_topic_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_topic_entries.
    def visitCreate_topic_entries(self, ctx:YQLParser.Create_topic_entriesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#create_topic_entry.
    def visitCreate_topic_entry(self, ctx:YQLParser.Create_topic_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#with_topic_settings.
    def visitWith_topic_settings(self, ctx:YQLParser.With_topic_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_stmt.
    def visitAlter_topic_stmt(self, ctx:YQLParser.Alter_topic_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_action.
    def visitAlter_topic_action(self, ctx:YQLParser.Alter_topic_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_add_consumer.
    def visitAlter_topic_add_consumer(self, ctx:YQLParser.Alter_topic_add_consumerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_create_consumer_entry.
    def visitTopic_create_consumer_entry(self, ctx:YQLParser.Topic_create_consumer_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_alter_consumer.
    def visitAlter_topic_alter_consumer(self, ctx:YQLParser.Alter_topic_alter_consumerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_alter_consumer_entry.
    def visitAlter_topic_alter_consumer_entry(self, ctx:YQLParser.Alter_topic_alter_consumer_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_drop_consumer.
    def visitAlter_topic_drop_consumer(self, ctx:YQLParser.Alter_topic_drop_consumerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_alter_consumer_set.
    def visitTopic_alter_consumer_set(self, ctx:YQLParser.Topic_alter_consumer_setContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_alter_consumer_reset.
    def visitTopic_alter_consumer_reset(self, ctx:YQLParser.Topic_alter_consumer_resetContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_set_settings.
    def visitAlter_topic_set_settings(self, ctx:YQLParser.Alter_topic_set_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_topic_reset_settings.
    def visitAlter_topic_reset_settings(self, ctx:YQLParser.Alter_topic_reset_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#drop_topic_stmt.
    def visitDrop_topic_stmt(self, ctx:YQLParser.Drop_topic_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_settings.
    def visitTopic_settings(self, ctx:YQLParser.Topic_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_settings_entry.
    def visitTopic_settings_entry(self, ctx:YQLParser.Topic_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_setting_value.
    def visitTopic_setting_value(self, ctx:YQLParser.Topic_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_consumer_with_settings.
    def visitTopic_consumer_with_settings(self, ctx:YQLParser.Topic_consumer_with_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_consumer_settings.
    def visitTopic_consumer_settings(self, ctx:YQLParser.Topic_consumer_settingsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_consumer_settings_entry.
    def visitTopic_consumer_settings_entry(self, ctx:YQLParser.Topic_consumer_settings_entryContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_consumer_setting_value.
    def visitTopic_consumer_setting_value(self, ctx:YQLParser.Topic_consumer_setting_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_ref.
    def visitTopic_ref(self, ctx:YQLParser.Topic_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#topic_consumer_ref.
    def visitTopic_consumer_ref(self, ctx:YQLParser.Topic_consumer_refContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#null_treatment.
    def visitNull_treatment(self, ctx:YQLParser.Null_treatmentContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#filter_clause.
    def visitFilter_clause(self, ctx:YQLParser.Filter_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_name_or_specification.
    def visitWindow_name_or_specification(self, ctx:YQLParser.Window_name_or_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_name.
    def visitWindow_name(self, ctx:YQLParser.Window_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_clause.
    def visitWindow_clause(self, ctx:YQLParser.Window_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_definition_list.
    def visitWindow_definition_list(self, ctx:YQLParser.Window_definition_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_definition.
    def visitWindow_definition(self, ctx:YQLParser.Window_definitionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#new_window_name.
    def visitNew_window_name(self, ctx:YQLParser.New_window_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_specification.
    def visitWindow_specification(self, ctx:YQLParser.Window_specificationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_specification_details.
    def visitWindow_specification_details(self, ctx:YQLParser.Window_specification_detailsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#existing_window_name.
    def visitExisting_window_name(self, ctx:YQLParser.Existing_window_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_partition_clause.
    def visitWindow_partition_clause(self, ctx:YQLParser.Window_partition_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_order_clause.
    def visitWindow_order_clause(self, ctx:YQLParser.Window_order_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_clause.
    def visitWindow_frame_clause(self, ctx:YQLParser.Window_frame_clauseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_units.
    def visitWindow_frame_units(self, ctx:YQLParser.Window_frame_unitsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_extent.
    def visitWindow_frame_extent(self, ctx:YQLParser.Window_frame_extentContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_between.
    def visitWindow_frame_between(self, ctx:YQLParser.Window_frame_betweenContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_bound.
    def visitWindow_frame_bound(self, ctx:YQLParser.Window_frame_boundContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#window_frame_exclusion.
    def visitWindow_frame_exclusion(self, ctx:YQLParser.Window_frame_exclusionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#use_stmt.
    def visitUse_stmt(self, ctx:YQLParser.Use_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#subselect_stmt.
    def visitSubselect_stmt(self, ctx:YQLParser.Subselect_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#named_nodes_stmt.
    def visitNamed_nodes_stmt(self, ctx:YQLParser.Named_nodes_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#commit_stmt.
    def visitCommit_stmt(self, ctx:YQLParser.Commit_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#rollback_stmt.
    def visitRollback_stmt(self, ctx:YQLParser.Rollback_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#analyze_table.
    def visitAnalyze_table(self, ctx:YQLParser.Analyze_tableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#analyze_table_list.
    def visitAnalyze_table_list(self, ctx:YQLParser.Analyze_table_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#analyze_stmt.
    def visitAnalyze_stmt(self, ctx:YQLParser.Analyze_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_sequence_stmt.
    def visitAlter_sequence_stmt(self, ctx:YQLParser.Alter_sequence_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#alter_sequence_action.
    def visitAlter_sequence_action(self, ctx:YQLParser.Alter_sequence_actionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#show_create_table_stmt.
    def visitShow_create_table_stmt(self, ctx:YQLParser.Show_create_table_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#identifier.
    def visitIdentifier(self, ctx:YQLParser.IdentifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id.
    def visitId(self, ctx:YQLParser.IdContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_schema.
    def visitId_schema(self, ctx:YQLParser.Id_schemaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_expr.
    def visitId_expr(self, ctx:YQLParser.Id_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_expr_in.
    def visitId_expr_in(self, ctx:YQLParser.Id_expr_inContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_window.
    def visitId_window(self, ctx:YQLParser.Id_windowContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_table.
    def visitId_table(self, ctx:YQLParser.Id_tableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_without.
    def visitId_without(self, ctx:YQLParser.Id_withoutContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_hint.
    def visitId_hint(self, ctx:YQLParser.Id_hintContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_as_compat.
    def visitId_as_compat(self, ctx:YQLParser.Id_as_compatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id.
    def visitAn_id(self, ctx:YQLParser.An_idContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_or_type.
    def visitAn_id_or_type(self, ctx:YQLParser.An_id_or_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_schema.
    def visitAn_id_schema(self, ctx:YQLParser.An_id_schemaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_expr.
    def visitAn_id_expr(self, ctx:YQLParser.An_id_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_expr_in.
    def visitAn_id_expr_in(self, ctx:YQLParser.An_id_expr_inContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_window.
    def visitAn_id_window(self, ctx:YQLParser.An_id_windowContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_table.
    def visitAn_id_table(self, ctx:YQLParser.An_id_tableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_without.
    def visitAn_id_without(self, ctx:YQLParser.An_id_withoutContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_hint.
    def visitAn_id_hint(self, ctx:YQLParser.An_id_hintContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_pure.
    def visitAn_id_pure(self, ctx:YQLParser.An_id_pureContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#an_id_as_compat.
    def visitAn_id_as_compat(self, ctx:YQLParser.An_id_as_compatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#view_name.
    def visitView_name(self, ctx:YQLParser.View_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#opt_id_prefix.
    def visitOpt_id_prefix(self, ctx:YQLParser.Opt_id_prefixContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#cluster_expr.
    def visitCluster_expr(self, ctx:YQLParser.Cluster_exprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_or_type.
    def visitId_or_type(self, ctx:YQLParser.Id_or_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#opt_id_prefix_or_type.
    def visitOpt_id_prefix_or_type(self, ctx:YQLParser.Opt_id_prefix_or_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_or_at.
    def visitId_or_at(self, ctx:YQLParser.Id_or_atContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_table_or_type.
    def visitId_table_or_type(self, ctx:YQLParser.Id_table_or_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#id_table_or_at.
    def visitId_table_or_at(self, ctx:YQLParser.Id_table_or_atContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword.
    def visitKeyword(self, ctx:YQLParser.KeywordContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_expr_uncompat.
    def visitKeyword_expr_uncompat(self, ctx:YQLParser.Keyword_expr_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_table_uncompat.
    def visitKeyword_table_uncompat(self, ctx:YQLParser.Keyword_table_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_select_uncompat.
    def visitKeyword_select_uncompat(self, ctx:YQLParser.Keyword_select_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_alter_uncompat.
    def visitKeyword_alter_uncompat(self, ctx:YQLParser.Keyword_alter_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_in_uncompat.
    def visitKeyword_in_uncompat(self, ctx:YQLParser.Keyword_in_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_window_uncompat.
    def visitKeyword_window_uncompat(self, ctx:YQLParser.Keyword_window_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_hint_uncompat.
    def visitKeyword_hint_uncompat(self, ctx:YQLParser.Keyword_hint_uncompatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_as_compat.
    def visitKeyword_as_compat(self, ctx:YQLParser.Keyword_as_compatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#keyword_compat.
    def visitKeyword_compat(self, ctx:YQLParser.Keyword_compatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#type_id.
    def visitType_id(self, ctx:YQLParser.Type_idContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#bool_value.
    def visitBool_value(self, ctx:YQLParser.Bool_valueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#real.
    def visitReal(self, ctx:YQLParser.RealContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YQLParser#integer.
    def visitInteger(self, ctx:YQLParser.IntegerContext):
        return self.visitChildren(ctx)



del YQLParser