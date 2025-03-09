// Generated from YQL.g4 by ANTLR 4.13.1
package yql.antlr4.parser;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link YQLParser}.
 */
public interface YQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link YQLParser#sql_query}.
	 * @param ctx the parse tree
	 */
	void enterSql_query(YQLParser.Sql_queryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sql_query}.
	 * @param ctx the parse tree
	 */
	void exitSql_query(YQLParser.Sql_queryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sql_stmt_list}.
	 * @param ctx the parse tree
	 */
	void enterSql_stmt_list(YQLParser.Sql_stmt_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sql_stmt_list}.
	 * @param ctx the parse tree
	 */
	void exitSql_stmt_list(YQLParser.Sql_stmt_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ansi_sql_stmt_list}.
	 * @param ctx the parse tree
	 */
	void enterAnsi_sql_stmt_list(YQLParser.Ansi_sql_stmt_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ansi_sql_stmt_list}.
	 * @param ctx the parse tree
	 */
	void exitAnsi_sql_stmt_list(YQLParser.Ansi_sql_stmt_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#lambda_body}.
	 * @param ctx the parse tree
	 */
	void enterLambda_body(YQLParser.Lambda_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#lambda_body}.
	 * @param ctx the parse tree
	 */
	void exitLambda_body(YQLParser.Lambda_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#lambda_stmt}.
	 * @param ctx the parse tree
	 */
	void enterLambda_stmt(YQLParser.Lambda_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#lambda_stmt}.
	 * @param ctx the parse tree
	 */
	void exitLambda_stmt(YQLParser.Lambda_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sql_stmt}.
	 * @param ctx the parse tree
	 */
	void enterSql_stmt(YQLParser.Sql_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sql_stmt}.
	 * @param ctx the parse tree
	 */
	void exitSql_stmt(YQLParser.Sql_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sql_stmt_core}.
	 * @param ctx the parse tree
	 */
	void enterSql_stmt_core(YQLParser.Sql_stmt_coreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sql_stmt_core}.
	 * @param ctx the parse tree
	 */
	void exitSql_stmt_core(YQLParser.Sql_stmt_coreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(YQLParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(YQLParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#or_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterOr_subexpr(YQLParser.Or_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#or_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitOr_subexpr(YQLParser.Or_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#and_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterAnd_subexpr(YQLParser.And_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#and_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitAnd_subexpr(YQLParser.And_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#xor_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterXor_subexpr(YQLParser.Xor_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#xor_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitXor_subexpr(YQLParser.Xor_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#distinct_from_op}.
	 * @param ctx the parse tree
	 */
	void enterDistinct_from_op(YQLParser.Distinct_from_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#distinct_from_op}.
	 * @param ctx the parse tree
	 */
	void exitDistinct_from_op(YQLParser.Distinct_from_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#cond_expr}.
	 * @param ctx the parse tree
	 */
	void enterCond_expr(YQLParser.Cond_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#cond_expr}.
	 * @param ctx the parse tree
	 */
	void exitCond_expr(YQLParser.Cond_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#match_op}.
	 * @param ctx the parse tree
	 */
	void enterMatch_op(YQLParser.Match_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#match_op}.
	 * @param ctx the parse tree
	 */
	void exitMatch_op(YQLParser.Match_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#eq_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterEq_subexpr(YQLParser.Eq_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#eq_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitEq_subexpr(YQLParser.Eq_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#shift_right}.
	 * @param ctx the parse tree
	 */
	void enterShift_right(YQLParser.Shift_rightContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#shift_right}.
	 * @param ctx the parse tree
	 */
	void exitShift_right(YQLParser.Shift_rightContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#rot_right}.
	 * @param ctx the parse tree
	 */
	void enterRot_right(YQLParser.Rot_rightContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#rot_right}.
	 * @param ctx the parse tree
	 */
	void exitRot_right(YQLParser.Rot_rightContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#double_question}.
	 * @param ctx the parse tree
	 */
	void enterDouble_question(YQLParser.Double_questionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#double_question}.
	 * @param ctx the parse tree
	 */
	void exitDouble_question(YQLParser.Double_questionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#neq_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterNeq_subexpr(YQLParser.Neq_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#neq_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitNeq_subexpr(YQLParser.Neq_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#bit_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterBit_subexpr(YQLParser.Bit_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#bit_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitBit_subexpr(YQLParser.Bit_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#add_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterAdd_subexpr(YQLParser.Add_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#add_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitAdd_subexpr(YQLParser.Add_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#mul_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterMul_subexpr(YQLParser.Mul_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#mul_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitMul_subexpr(YQLParser.Mul_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#con_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterCon_subexpr(YQLParser.Con_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#con_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitCon_subexpr(YQLParser.Con_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#unary_op}.
	 * @param ctx the parse tree
	 */
	void enterUnary_op(YQLParser.Unary_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#unary_op}.
	 * @param ctx the parse tree
	 */
	void exitUnary_op(YQLParser.Unary_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#unary_subexpr_suffix}.
	 * @param ctx the parse tree
	 */
	void enterUnary_subexpr_suffix(YQLParser.Unary_subexpr_suffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#unary_subexpr_suffix}.
	 * @param ctx the parse tree
	 */
	void exitUnary_subexpr_suffix(YQLParser.Unary_subexpr_suffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#unary_casual_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterUnary_casual_subexpr(YQLParser.Unary_casual_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#unary_casual_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitUnary_casual_subexpr(YQLParser.Unary_casual_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#in_unary_casual_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterIn_unary_casual_subexpr(YQLParser.In_unary_casual_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#in_unary_casual_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitIn_unary_casual_subexpr(YQLParser.In_unary_casual_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#unary_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterUnary_subexpr(YQLParser.Unary_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#unary_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitUnary_subexpr(YQLParser.Unary_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#in_unary_subexpr}.
	 * @param ctx the parse tree
	 */
	void enterIn_unary_subexpr(YQLParser.In_unary_subexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#in_unary_subexpr}.
	 * @param ctx the parse tree
	 */
	void exitIn_unary_subexpr(YQLParser.In_unary_subexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#list_literal}.
	 * @param ctx the parse tree
	 */
	void enterList_literal(YQLParser.List_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#list_literal}.
	 * @param ctx the parse tree
	 */
	void exitList_literal(YQLParser.List_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#expr_dict_list}.
	 * @param ctx the parse tree
	 */
	void enterExpr_dict_list(YQLParser.Expr_dict_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#expr_dict_list}.
	 * @param ctx the parse tree
	 */
	void exitExpr_dict_list(YQLParser.Expr_dict_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#dict_literal}.
	 * @param ctx the parse tree
	 */
	void enterDict_literal(YQLParser.Dict_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#dict_literal}.
	 * @param ctx the parse tree
	 */
	void exitDict_literal(YQLParser.Dict_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#expr_struct_list}.
	 * @param ctx the parse tree
	 */
	void enterExpr_struct_list(YQLParser.Expr_struct_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#expr_struct_list}.
	 * @param ctx the parse tree
	 */
	void exitExpr_struct_list(YQLParser.Expr_struct_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#struct_literal}.
	 * @param ctx the parse tree
	 */
	void enterStruct_literal(YQLParser.Struct_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#struct_literal}.
	 * @param ctx the parse tree
	 */
	void exitStruct_literal(YQLParser.Struct_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#atom_expr}.
	 * @param ctx the parse tree
	 */
	void enterAtom_expr(YQLParser.Atom_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#atom_expr}.
	 * @param ctx the parse tree
	 */
	void exitAtom_expr(YQLParser.Atom_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#in_atom_expr}.
	 * @param ctx the parse tree
	 */
	void enterIn_atom_expr(YQLParser.In_atom_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#in_atom_expr}.
	 * @param ctx the parse tree
	 */
	void exitIn_atom_expr(YQLParser.In_atom_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#cast_expr}.
	 * @param ctx the parse tree
	 */
	void enterCast_expr(YQLParser.Cast_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#cast_expr}.
	 * @param ctx the parse tree
	 */
	void exitCast_expr(YQLParser.Cast_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#bitcast_expr}.
	 * @param ctx the parse tree
	 */
	void enterBitcast_expr(YQLParser.Bitcast_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#bitcast_expr}.
	 * @param ctx the parse tree
	 */
	void exitBitcast_expr(YQLParser.Bitcast_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#exists_expr}.
	 * @param ctx the parse tree
	 */
	void enterExists_expr(YQLParser.Exists_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#exists_expr}.
	 * @param ctx the parse tree
	 */
	void exitExists_expr(YQLParser.Exists_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#case_expr}.
	 * @param ctx the parse tree
	 */
	void enterCase_expr(YQLParser.Case_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#case_expr}.
	 * @param ctx the parse tree
	 */
	void exitCase_expr(YQLParser.Case_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#lambda}.
	 * @param ctx the parse tree
	 */
	void enterLambda(YQLParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#lambda}.
	 * @param ctx the parse tree
	 */
	void exitLambda(YQLParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#in_expr}.
	 * @param ctx the parse tree
	 */
	void enterIn_expr(YQLParser.In_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#in_expr}.
	 * @param ctx the parse tree
	 */
	void exitIn_expr(YQLParser.In_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_api_expr}.
	 * @param ctx the parse tree
	 */
	void enterJson_api_expr(YQLParser.Json_api_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_api_expr}.
	 * @param ctx the parse tree
	 */
	void exitJson_api_expr(YQLParser.Json_api_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#jsonpath_spec}.
	 * @param ctx the parse tree
	 */
	void enterJsonpath_spec(YQLParser.Jsonpath_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#jsonpath_spec}.
	 * @param ctx the parse tree
	 */
	void exitJsonpath_spec(YQLParser.Jsonpath_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterJson_variable_name(YQLParser.Json_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitJson_variable_name(YQLParser.Json_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_variable}.
	 * @param ctx the parse tree
	 */
	void enterJson_variable(YQLParser.Json_variableContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_variable}.
	 * @param ctx the parse tree
	 */
	void exitJson_variable(YQLParser.Json_variableContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_variables}.
	 * @param ctx the parse tree
	 */
	void enterJson_variables(YQLParser.Json_variablesContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_variables}.
	 * @param ctx the parse tree
	 */
	void exitJson_variables(YQLParser.Json_variablesContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_common_args}.
	 * @param ctx the parse tree
	 */
	void enterJson_common_args(YQLParser.Json_common_argsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_common_args}.
	 * @param ctx the parse tree
	 */
	void exitJson_common_args(YQLParser.Json_common_argsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_case_handler}.
	 * @param ctx the parse tree
	 */
	void enterJson_case_handler(YQLParser.Json_case_handlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_case_handler}.
	 * @param ctx the parse tree
	 */
	void exitJson_case_handler(YQLParser.Json_case_handlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_value}.
	 * @param ctx the parse tree
	 */
	void enterJson_value(YQLParser.Json_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_value}.
	 * @param ctx the parse tree
	 */
	void exitJson_value(YQLParser.Json_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_exists_handler}.
	 * @param ctx the parse tree
	 */
	void enterJson_exists_handler(YQLParser.Json_exists_handlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_exists_handler}.
	 * @param ctx the parse tree
	 */
	void exitJson_exists_handler(YQLParser.Json_exists_handlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_exists}.
	 * @param ctx the parse tree
	 */
	void enterJson_exists(YQLParser.Json_existsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_exists}.
	 * @param ctx the parse tree
	 */
	void exitJson_exists(YQLParser.Json_existsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_query_wrapper}.
	 * @param ctx the parse tree
	 */
	void enterJson_query_wrapper(YQLParser.Json_query_wrapperContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_query_wrapper}.
	 * @param ctx the parse tree
	 */
	void exitJson_query_wrapper(YQLParser.Json_query_wrapperContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_query_handler}.
	 * @param ctx the parse tree
	 */
	void enterJson_query_handler(YQLParser.Json_query_handlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_query_handler}.
	 * @param ctx the parse tree
	 */
	void exitJson_query_handler(YQLParser.Json_query_handlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#json_query}.
	 * @param ctx the parse tree
	 */
	void enterJson_query(YQLParser.Json_queryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#json_query}.
	 * @param ctx the parse tree
	 */
	void exitJson_query(YQLParser.Json_queryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#smart_parenthesis}.
	 * @param ctx the parse tree
	 */
	void enterSmart_parenthesis(YQLParser.Smart_parenthesisContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#smart_parenthesis}.
	 * @param ctx the parse tree
	 */
	void exitSmart_parenthesis(YQLParser.Smart_parenthesisContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#expr_list}.
	 * @param ctx the parse tree
	 */
	void enterExpr_list(YQLParser.Expr_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#expr_list}.
	 * @param ctx the parse tree
	 */
	void exitExpr_list(YQLParser.Expr_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#pure_column_list}.
	 * @param ctx the parse tree
	 */
	void enterPure_column_list(YQLParser.Pure_column_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#pure_column_list}.
	 * @param ctx the parse tree
	 */
	void exitPure_column_list(YQLParser.Pure_column_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#pure_column_or_named}.
	 * @param ctx the parse tree
	 */
	void enterPure_column_or_named(YQLParser.Pure_column_or_namedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#pure_column_or_named}.
	 * @param ctx the parse tree
	 */
	void exitPure_column_or_named(YQLParser.Pure_column_or_namedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#pure_column_or_named_list}.
	 * @param ctx the parse tree
	 */
	void enterPure_column_or_named_list(YQLParser.Pure_column_or_named_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#pure_column_or_named_list}.
	 * @param ctx the parse tree
	 */
	void exitPure_column_or_named_list(YQLParser.Pure_column_or_named_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#column_name}.
	 * @param ctx the parse tree
	 */
	void enterColumn_name(YQLParser.Column_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#column_name}.
	 * @param ctx the parse tree
	 */
	void exitColumn_name(YQLParser.Column_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#without_column_name}.
	 * @param ctx the parse tree
	 */
	void enterWithout_column_name(YQLParser.Without_column_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#without_column_name}.
	 * @param ctx the parse tree
	 */
	void exitWithout_column_name(YQLParser.Without_column_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#column_list}.
	 * @param ctx the parse tree
	 */
	void enterColumn_list(YQLParser.Column_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#column_list}.
	 * @param ctx the parse tree
	 */
	void exitColumn_list(YQLParser.Column_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#without_column_list}.
	 * @param ctx the parse tree
	 */
	void enterWithout_column_list(YQLParser.Without_column_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#without_column_list}.
	 * @param ctx the parse tree
	 */
	void exitWithout_column_list(YQLParser.Without_column_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_expr}.
	 * @param ctx the parse tree
	 */
	void enterNamed_expr(YQLParser.Named_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_expr}.
	 * @param ctx the parse tree
	 */
	void exitNamed_expr(YQLParser.Named_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_expr_list}.
	 * @param ctx the parse tree
	 */
	void enterNamed_expr_list(YQLParser.Named_expr_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_expr_list}.
	 * @param ctx the parse tree
	 */
	void exitNamed_expr_list(YQLParser.Named_expr_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#invoke_expr}.
	 * @param ctx the parse tree
	 */
	void enterInvoke_expr(YQLParser.Invoke_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#invoke_expr}.
	 * @param ctx the parse tree
	 */
	void exitInvoke_expr(YQLParser.Invoke_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#invoke_expr_tail}.
	 * @param ctx the parse tree
	 */
	void enterInvoke_expr_tail(YQLParser.Invoke_expr_tailContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#invoke_expr_tail}.
	 * @param ctx the parse tree
	 */
	void exitInvoke_expr_tail(YQLParser.Invoke_expr_tailContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#using_call_expr}.
	 * @param ctx the parse tree
	 */
	void enterUsing_call_expr(YQLParser.Using_call_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#using_call_expr}.
	 * @param ctx the parse tree
	 */
	void exitUsing_call_expr(YQLParser.Using_call_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#key_expr}.
	 * @param ctx the parse tree
	 */
	void enterKey_expr(YQLParser.Key_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#key_expr}.
	 * @param ctx the parse tree
	 */
	void exitKey_expr(YQLParser.Key_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#when_expr}.
	 * @param ctx the parse tree
	 */
	void enterWhen_expr(YQLParser.When_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#when_expr}.
	 * @param ctx the parse tree
	 */
	void exitWhen_expr(YQLParser.When_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#literal_value}.
	 * @param ctx the parse tree
	 */
	void enterLiteral_value(YQLParser.Literal_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#literal_value}.
	 * @param ctx the parse tree
	 */
	void exitLiteral_value(YQLParser.Literal_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#bind_parameter}.
	 * @param ctx the parse tree
	 */
	void enterBind_parameter(YQLParser.Bind_parameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#bind_parameter}.
	 * @param ctx the parse tree
	 */
	void exitBind_parameter(YQLParser.Bind_parameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#opt_bind_parameter}.
	 * @param ctx the parse tree
	 */
	void enterOpt_bind_parameter(YQLParser.Opt_bind_parameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#opt_bind_parameter}.
	 * @param ctx the parse tree
	 */
	void exitOpt_bind_parameter(YQLParser.Opt_bind_parameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#bind_parameter_list}.
	 * @param ctx the parse tree
	 */
	void enterBind_parameter_list(YQLParser.Bind_parameter_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#bind_parameter_list}.
	 * @param ctx the parse tree
	 */
	void exitBind_parameter_list(YQLParser.Bind_parameter_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_bind_parameter}.
	 * @param ctx the parse tree
	 */
	void enterNamed_bind_parameter(YQLParser.Named_bind_parameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_bind_parameter}.
	 * @param ctx the parse tree
	 */
	void exitNamed_bind_parameter(YQLParser.Named_bind_parameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_bind_parameter_list}.
	 * @param ctx the parse tree
	 */
	void enterNamed_bind_parameter_list(YQLParser.Named_bind_parameter_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_bind_parameter_list}.
	 * @param ctx the parse tree
	 */
	void exitNamed_bind_parameter_list(YQLParser.Named_bind_parameter_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#signed_number}.
	 * @param ctx the parse tree
	 */
	void enterSigned_number(YQLParser.Signed_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#signed_number}.
	 * @param ctx the parse tree
	 */
	void exitSigned_number(YQLParser.Signed_numberContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_simple}.
	 * @param ctx the parse tree
	 */
	void enterType_name_simple(YQLParser.Type_name_simpleContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_simple}.
	 * @param ctx the parse tree
	 */
	void exitType_name_simple(YQLParser.Type_name_simpleContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#integer_or_bind}.
	 * @param ctx the parse tree
	 */
	void enterInteger_or_bind(YQLParser.Integer_or_bindContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#integer_or_bind}.
	 * @param ctx the parse tree
	 */
	void exitInteger_or_bind(YQLParser.Integer_or_bindContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_tag}.
	 * @param ctx the parse tree
	 */
	void enterType_name_tag(YQLParser.Type_name_tagContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_tag}.
	 * @param ctx the parse tree
	 */
	void exitType_name_tag(YQLParser.Type_name_tagContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#struct_arg}.
	 * @param ctx the parse tree
	 */
	void enterStruct_arg(YQLParser.Struct_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#struct_arg}.
	 * @param ctx the parse tree
	 */
	void exitStruct_arg(YQLParser.Struct_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#struct_arg_positional}.
	 * @param ctx the parse tree
	 */
	void enterStruct_arg_positional(YQLParser.Struct_arg_positionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#struct_arg_positional}.
	 * @param ctx the parse tree
	 */
	void exitStruct_arg_positional(YQLParser.Struct_arg_positionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#variant_arg}.
	 * @param ctx the parse tree
	 */
	void enterVariant_arg(YQLParser.Variant_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#variant_arg}.
	 * @param ctx the parse tree
	 */
	void exitVariant_arg(YQLParser.Variant_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#callable_arg}.
	 * @param ctx the parse tree
	 */
	void enterCallable_arg(YQLParser.Callable_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#callable_arg}.
	 * @param ctx the parse tree
	 */
	void exitCallable_arg(YQLParser.Callable_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#callable_arg_list}.
	 * @param ctx the parse tree
	 */
	void enterCallable_arg_list(YQLParser.Callable_arg_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#callable_arg_list}.
	 * @param ctx the parse tree
	 */
	void exitCallable_arg_list(YQLParser.Callable_arg_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_decimal}.
	 * @param ctx the parse tree
	 */
	void enterType_name_decimal(YQLParser.Type_name_decimalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_decimal}.
	 * @param ctx the parse tree
	 */
	void exitType_name_decimal(YQLParser.Type_name_decimalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_optional}.
	 * @param ctx the parse tree
	 */
	void enterType_name_optional(YQLParser.Type_name_optionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_optional}.
	 * @param ctx the parse tree
	 */
	void exitType_name_optional(YQLParser.Type_name_optionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_tuple}.
	 * @param ctx the parse tree
	 */
	void enterType_name_tuple(YQLParser.Type_name_tupleContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_tuple}.
	 * @param ctx the parse tree
	 */
	void exitType_name_tuple(YQLParser.Type_name_tupleContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_struct}.
	 * @param ctx the parse tree
	 */
	void enterType_name_struct(YQLParser.Type_name_structContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_struct}.
	 * @param ctx the parse tree
	 */
	void exitType_name_struct(YQLParser.Type_name_structContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_variant}.
	 * @param ctx the parse tree
	 */
	void enterType_name_variant(YQLParser.Type_name_variantContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_variant}.
	 * @param ctx the parse tree
	 */
	void exitType_name_variant(YQLParser.Type_name_variantContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_list}.
	 * @param ctx the parse tree
	 */
	void enterType_name_list(YQLParser.Type_name_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_list}.
	 * @param ctx the parse tree
	 */
	void exitType_name_list(YQLParser.Type_name_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_stream}.
	 * @param ctx the parse tree
	 */
	void enterType_name_stream(YQLParser.Type_name_streamContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_stream}.
	 * @param ctx the parse tree
	 */
	void exitType_name_stream(YQLParser.Type_name_streamContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_flow}.
	 * @param ctx the parse tree
	 */
	void enterType_name_flow(YQLParser.Type_name_flowContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_flow}.
	 * @param ctx the parse tree
	 */
	void exitType_name_flow(YQLParser.Type_name_flowContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_dict}.
	 * @param ctx the parse tree
	 */
	void enterType_name_dict(YQLParser.Type_name_dictContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_dict}.
	 * @param ctx the parse tree
	 */
	void exitType_name_dict(YQLParser.Type_name_dictContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_set}.
	 * @param ctx the parse tree
	 */
	void enterType_name_set(YQLParser.Type_name_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_set}.
	 * @param ctx the parse tree
	 */
	void exitType_name_set(YQLParser.Type_name_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_enum}.
	 * @param ctx the parse tree
	 */
	void enterType_name_enum(YQLParser.Type_name_enumContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_enum}.
	 * @param ctx the parse tree
	 */
	void exitType_name_enum(YQLParser.Type_name_enumContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_resource}.
	 * @param ctx the parse tree
	 */
	void enterType_name_resource(YQLParser.Type_name_resourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_resource}.
	 * @param ctx the parse tree
	 */
	void exitType_name_resource(YQLParser.Type_name_resourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_tagged}.
	 * @param ctx the parse tree
	 */
	void enterType_name_tagged(YQLParser.Type_name_taggedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_tagged}.
	 * @param ctx the parse tree
	 */
	void exitType_name_tagged(YQLParser.Type_name_taggedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_callable}.
	 * @param ctx the parse tree
	 */
	void enterType_name_callable(YQLParser.Type_name_callableContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_callable}.
	 * @param ctx the parse tree
	 */
	void exitType_name_callable(YQLParser.Type_name_callableContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_composite}.
	 * @param ctx the parse tree
	 */
	void enterType_name_composite(YQLParser.Type_name_compositeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_composite}.
	 * @param ctx the parse tree
	 */
	void exitType_name_composite(YQLParser.Type_name_compositeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name}.
	 * @param ctx the parse tree
	 */
	void enterType_name(YQLParser.Type_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name}.
	 * @param ctx the parse tree
	 */
	void exitType_name(YQLParser.Type_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_name_or_bind}.
	 * @param ctx the parse tree
	 */
	void enterType_name_or_bind(YQLParser.Type_name_or_bindContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_name_or_bind}.
	 * @param ctx the parse tree
	 */
	void exitType_name_or_bind(YQLParser.Type_name_or_bindContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#value_constructor_literal}.
	 * @param ctx the parse tree
	 */
	void enterValue_constructor_literal(YQLParser.Value_constructor_literalContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#value_constructor_literal}.
	 * @param ctx the parse tree
	 */
	void exitValue_constructor_literal(YQLParser.Value_constructor_literalContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#value_constructor}.
	 * @param ctx the parse tree
	 */
	void enterValue_constructor(YQLParser.Value_constructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#value_constructor}.
	 * @param ctx the parse tree
	 */
	void exitValue_constructor(YQLParser.Value_constructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#declare_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDeclare_stmt(YQLParser.Declare_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#declare_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDeclare_stmt(YQLParser.Declare_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#module_path}.
	 * @param ctx the parse tree
	 */
	void enterModule_path(YQLParser.Module_pathContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#module_path}.
	 * @param ctx the parse tree
	 */
	void exitModule_path(YQLParser.Module_pathContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#import_stmt}.
	 * @param ctx the parse tree
	 */
	void enterImport_stmt(YQLParser.Import_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#import_stmt}.
	 * @param ctx the parse tree
	 */
	void exitImport_stmt(YQLParser.Import_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#export_stmt}.
	 * @param ctx the parse tree
	 */
	void enterExport_stmt(YQLParser.Export_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#export_stmt}.
	 * @param ctx the parse tree
	 */
	void exitExport_stmt(YQLParser.Export_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#call_action}.
	 * @param ctx the parse tree
	 */
	void enterCall_action(YQLParser.Call_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#call_action}.
	 * @param ctx the parse tree
	 */
	void exitCall_action(YQLParser.Call_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#inline_action}.
	 * @param ctx the parse tree
	 */
	void enterInline_action(YQLParser.Inline_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#inline_action}.
	 * @param ctx the parse tree
	 */
	void exitInline_action(YQLParser.Inline_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#do_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDo_stmt(YQLParser.Do_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#do_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDo_stmt(YQLParser.Do_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#pragma_stmt}.
	 * @param ctx the parse tree
	 */
	void enterPragma_stmt(YQLParser.Pragma_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#pragma_stmt}.
	 * @param ctx the parse tree
	 */
	void exitPragma_stmt(YQLParser.Pragma_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#pragma_value}.
	 * @param ctx the parse tree
	 */
	void enterPragma_value(YQLParser.Pragma_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#pragma_value}.
	 * @param ctx the parse tree
	 */
	void exitPragma_value(YQLParser.Pragma_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sort_specification}.
	 * @param ctx the parse tree
	 */
	void enterSort_specification(YQLParser.Sort_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sort_specification}.
	 * @param ctx the parse tree
	 */
	void exitSort_specification(YQLParser.Sort_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sort_specification_list}.
	 * @param ctx the parse tree
	 */
	void enterSort_specification_list(YQLParser.Sort_specification_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sort_specification_list}.
	 * @param ctx the parse tree
	 */
	void exitSort_specification_list(YQLParser.Sort_specification_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_stmt}.
	 * @param ctx the parse tree
	 */
	void enterSelect_stmt(YQLParser.Select_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_stmt}.
	 * @param ctx the parse tree
	 */
	void exitSelect_stmt(YQLParser.Select_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_unparenthesized_stmt}.
	 * @param ctx the parse tree
	 */
	void enterSelect_unparenthesized_stmt(YQLParser.Select_unparenthesized_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_unparenthesized_stmt}.
	 * @param ctx the parse tree
	 */
	void exitSelect_unparenthesized_stmt(YQLParser.Select_unparenthesized_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_kind_parenthesis}.
	 * @param ctx the parse tree
	 */
	void enterSelect_kind_parenthesis(YQLParser.Select_kind_parenthesisContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_kind_parenthesis}.
	 * @param ctx the parse tree
	 */
	void exitSelect_kind_parenthesis(YQLParser.Select_kind_parenthesisContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_op}.
	 * @param ctx the parse tree
	 */
	void enterSelect_op(YQLParser.Select_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_op}.
	 * @param ctx the parse tree
	 */
	void exitSelect_op(YQLParser.Select_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_kind_partial}.
	 * @param ctx the parse tree
	 */
	void enterSelect_kind_partial(YQLParser.Select_kind_partialContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_kind_partial}.
	 * @param ctx the parse tree
	 */
	void exitSelect_kind_partial(YQLParser.Select_kind_partialContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_kind}.
	 * @param ctx the parse tree
	 */
	void enterSelect_kind(YQLParser.Select_kindContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_kind}.
	 * @param ctx the parse tree
	 */
	void exitSelect_kind(YQLParser.Select_kindContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#process_core}.
	 * @param ctx the parse tree
	 */
	void enterProcess_core(YQLParser.Process_coreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#process_core}.
	 * @param ctx the parse tree
	 */
	void exitProcess_core(YQLParser.Process_coreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#external_call_param}.
	 * @param ctx the parse tree
	 */
	void enterExternal_call_param(YQLParser.External_call_paramContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#external_call_param}.
	 * @param ctx the parse tree
	 */
	void exitExternal_call_param(YQLParser.External_call_paramContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#external_call_settings}.
	 * @param ctx the parse tree
	 */
	void enterExternal_call_settings(YQLParser.External_call_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#external_call_settings}.
	 * @param ctx the parse tree
	 */
	void exitExternal_call_settings(YQLParser.External_call_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#reduce_core}.
	 * @param ctx the parse tree
	 */
	void enterReduce_core(YQLParser.Reduce_coreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#reduce_core}.
	 * @param ctx the parse tree
	 */
	void exitReduce_core(YQLParser.Reduce_coreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#opt_set_quantifier}.
	 * @param ctx the parse tree
	 */
	void enterOpt_set_quantifier(YQLParser.Opt_set_quantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#opt_set_quantifier}.
	 * @param ctx the parse tree
	 */
	void exitOpt_set_quantifier(YQLParser.Opt_set_quantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#select_core}.
	 * @param ctx the parse tree
	 */
	void enterSelect_core(YQLParser.Select_coreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#select_core}.
	 * @param ctx the parse tree
	 */
	void exitSelect_core(YQLParser.Select_coreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_recognition_clause}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_recognition_clause(YQLParser.Row_pattern_recognition_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_recognition_clause}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_recognition_clause(YQLParser.Row_pattern_recognition_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_rows_per_match}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_rows_per_match(YQLParser.Row_pattern_rows_per_matchContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_rows_per_match}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_rows_per_match(YQLParser.Row_pattern_rows_per_matchContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_empty_match_handling}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_empty_match_handling(YQLParser.Row_pattern_empty_match_handlingContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_empty_match_handling}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_empty_match_handling(YQLParser.Row_pattern_empty_match_handlingContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_measures}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_measures(YQLParser.Row_pattern_measuresContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_measures}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_measures(YQLParser.Row_pattern_measuresContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_measure_list}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_measure_list(YQLParser.Row_pattern_measure_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_measure_list}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_measure_list(YQLParser.Row_pattern_measure_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_measure_definition}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_measure_definition(YQLParser.Row_pattern_measure_definitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_measure_definition}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_measure_definition(YQLParser.Row_pattern_measure_definitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_common_syntax}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_common_syntax(YQLParser.Row_pattern_common_syntaxContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_common_syntax}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_common_syntax(YQLParser.Row_pattern_common_syntaxContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_skip_to}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_skip_to(YQLParser.Row_pattern_skip_toContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_skip_to}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_skip_to(YQLParser.Row_pattern_skip_toContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_skip_to_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_skip_to_variable_name(YQLParser.Row_pattern_skip_to_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_skip_to_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_skip_to_variable_name(YQLParser.Row_pattern_skip_to_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_initial_or_seek}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_initial_or_seek(YQLParser.Row_pattern_initial_or_seekContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_initial_or_seek}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_initial_or_seek(YQLParser.Row_pattern_initial_or_seekContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern(YQLParser.Row_patternContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern(YQLParser.Row_patternContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_term}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_term(YQLParser.Row_pattern_termContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_term}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_term(YQLParser.Row_pattern_termContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_factor}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_factor(YQLParser.Row_pattern_factorContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_factor}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_factor(YQLParser.Row_pattern_factorContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_quantifier}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_quantifier(YQLParser.Row_pattern_quantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_quantifier}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_quantifier(YQLParser.Row_pattern_quantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_primary}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_primary(YQLParser.Row_pattern_primaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_primary}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_primary(YQLParser.Row_pattern_primaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_primary_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_primary_variable_name(YQLParser.Row_pattern_primary_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_primary_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_primary_variable_name(YQLParser.Row_pattern_primary_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_permute}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_permute(YQLParser.Row_pattern_permuteContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_permute}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_permute(YQLParser.Row_pattern_permuteContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_clause}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_clause(YQLParser.Row_pattern_subset_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_clause}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_clause(YQLParser.Row_pattern_subset_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_list}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_list(YQLParser.Row_pattern_subset_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_list}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_list(YQLParser.Row_pattern_subset_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_item}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_item(YQLParser.Row_pattern_subset_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_item}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_item(YQLParser.Row_pattern_subset_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_item_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_item_variable_name(YQLParser.Row_pattern_subset_item_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_item_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_item_variable_name(YQLParser.Row_pattern_subset_item_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_rhs}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_rhs(YQLParser.Row_pattern_subset_rhsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_rhs}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_rhs(YQLParser.Row_pattern_subset_rhsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_subset_rhs_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_subset_rhs_variable_name(YQLParser.Row_pattern_subset_rhs_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_subset_rhs_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_subset_rhs_variable_name(YQLParser.Row_pattern_subset_rhs_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_definition_list}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_definition_list(YQLParser.Row_pattern_definition_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_definition_list}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_definition_list(YQLParser.Row_pattern_definition_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_definition}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_definition(YQLParser.Row_pattern_definitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_definition}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_definition(YQLParser.Row_pattern_definitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_definition_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_definition_variable_name(YQLParser.Row_pattern_definition_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_definition_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_definition_variable_name(YQLParser.Row_pattern_definition_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_definition_search_condition}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_definition_search_condition(YQLParser.Row_pattern_definition_search_conditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_definition_search_condition}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_definition_search_condition(YQLParser.Row_pattern_definition_search_conditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#search_condition}.
	 * @param ctx the parse tree
	 */
	void enterSearch_condition(YQLParser.Search_conditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#search_condition}.
	 * @param ctx the parse tree
	 */
	void exitSearch_condition(YQLParser.Search_conditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#row_pattern_variable_name}.
	 * @param ctx the parse tree
	 */
	void enterRow_pattern_variable_name(YQLParser.Row_pattern_variable_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#row_pattern_variable_name}.
	 * @param ctx the parse tree
	 */
	void exitRow_pattern_variable_name(YQLParser.Row_pattern_variable_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#order_by_clause}.
	 * @param ctx the parse tree
	 */
	void enterOrder_by_clause(YQLParser.Order_by_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#order_by_clause}.
	 * @param ctx the parse tree
	 */
	void exitOrder_by_clause(YQLParser.Order_by_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ext_order_by_clause}.
	 * @param ctx the parse tree
	 */
	void enterExt_order_by_clause(YQLParser.Ext_order_by_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ext_order_by_clause}.
	 * @param ctx the parse tree
	 */
	void exitExt_order_by_clause(YQLParser.Ext_order_by_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#group_by_clause}.
	 * @param ctx the parse tree
	 */
	void enterGroup_by_clause(YQLParser.Group_by_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#group_by_clause}.
	 * @param ctx the parse tree
	 */
	void exitGroup_by_clause(YQLParser.Group_by_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#grouping_element_list}.
	 * @param ctx the parse tree
	 */
	void enterGrouping_element_list(YQLParser.Grouping_element_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#grouping_element_list}.
	 * @param ctx the parse tree
	 */
	void exitGrouping_element_list(YQLParser.Grouping_element_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#grouping_element}.
	 * @param ctx the parse tree
	 */
	void enterGrouping_element(YQLParser.Grouping_elementContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#grouping_element}.
	 * @param ctx the parse tree
	 */
	void exitGrouping_element(YQLParser.Grouping_elementContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ordinary_grouping_set}.
	 * @param ctx the parse tree
	 */
	void enterOrdinary_grouping_set(YQLParser.Ordinary_grouping_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ordinary_grouping_set}.
	 * @param ctx the parse tree
	 */
	void exitOrdinary_grouping_set(YQLParser.Ordinary_grouping_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ordinary_grouping_set_list}.
	 * @param ctx the parse tree
	 */
	void enterOrdinary_grouping_set_list(YQLParser.Ordinary_grouping_set_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ordinary_grouping_set_list}.
	 * @param ctx the parse tree
	 */
	void exitOrdinary_grouping_set_list(YQLParser.Ordinary_grouping_set_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#rollup_list}.
	 * @param ctx the parse tree
	 */
	void enterRollup_list(YQLParser.Rollup_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#rollup_list}.
	 * @param ctx the parse tree
	 */
	void exitRollup_list(YQLParser.Rollup_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#cube_list}.
	 * @param ctx the parse tree
	 */
	void enterCube_list(YQLParser.Cube_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#cube_list}.
	 * @param ctx the parse tree
	 */
	void exitCube_list(YQLParser.Cube_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#grouping_sets_specification}.
	 * @param ctx the parse tree
	 */
	void enterGrouping_sets_specification(YQLParser.Grouping_sets_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#grouping_sets_specification}.
	 * @param ctx the parse tree
	 */
	void exitGrouping_sets_specification(YQLParser.Grouping_sets_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#hopping_window_specification}.
	 * @param ctx the parse tree
	 */
	void enterHopping_window_specification(YQLParser.Hopping_window_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#hopping_window_specification}.
	 * @param ctx the parse tree
	 */
	void exitHopping_window_specification(YQLParser.Hopping_window_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#result_column}.
	 * @param ctx the parse tree
	 */
	void enterResult_column(YQLParser.Result_columnContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#result_column}.
	 * @param ctx the parse tree
	 */
	void exitResult_column(YQLParser.Result_columnContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#join_source}.
	 * @param ctx the parse tree
	 */
	void enterJoin_source(YQLParser.Join_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#join_source}.
	 * @param ctx the parse tree
	 */
	void exitJoin_source(YQLParser.Join_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_column}.
	 * @param ctx the parse tree
	 */
	void enterNamed_column(YQLParser.Named_columnContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_column}.
	 * @param ctx the parse tree
	 */
	void exitNamed_column(YQLParser.Named_columnContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#flatten_by_arg}.
	 * @param ctx the parse tree
	 */
	void enterFlatten_by_arg(YQLParser.Flatten_by_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#flatten_by_arg}.
	 * @param ctx the parse tree
	 */
	void exitFlatten_by_arg(YQLParser.Flatten_by_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#flatten_source}.
	 * @param ctx the parse tree
	 */
	void enterFlatten_source(YQLParser.Flatten_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#flatten_source}.
	 * @param ctx the parse tree
	 */
	void exitFlatten_source(YQLParser.Flatten_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_single_source}.
	 * @param ctx the parse tree
	 */
	void enterNamed_single_source(YQLParser.Named_single_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_single_source}.
	 * @param ctx the parse tree
	 */
	void exitNamed_single_source(YQLParser.Named_single_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#single_source}.
	 * @param ctx the parse tree
	 */
	void enterSingle_source(YQLParser.Single_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#single_source}.
	 * @param ctx the parse tree
	 */
	void exitSingle_source(YQLParser.Single_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sample_clause}.
	 * @param ctx the parse tree
	 */
	void enterSample_clause(YQLParser.Sample_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sample_clause}.
	 * @param ctx the parse tree
	 */
	void exitSample_clause(YQLParser.Sample_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#tablesample_clause}.
	 * @param ctx the parse tree
	 */
	void enterTablesample_clause(YQLParser.Tablesample_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#tablesample_clause}.
	 * @param ctx the parse tree
	 */
	void exitTablesample_clause(YQLParser.Tablesample_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#sampling_mode}.
	 * @param ctx the parse tree
	 */
	void enterSampling_mode(YQLParser.Sampling_modeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#sampling_mode}.
	 * @param ctx the parse tree
	 */
	void exitSampling_mode(YQLParser.Sampling_modeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#repeatable_clause}.
	 * @param ctx the parse tree
	 */
	void enterRepeatable_clause(YQLParser.Repeatable_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#repeatable_clause}.
	 * @param ctx the parse tree
	 */
	void exitRepeatable_clause(YQLParser.Repeatable_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#join_op}.
	 * @param ctx the parse tree
	 */
	void enterJoin_op(YQLParser.Join_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#join_op}.
	 * @param ctx the parse tree
	 */
	void exitJoin_op(YQLParser.Join_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#join_constraint}.
	 * @param ctx the parse tree
	 */
	void enterJoin_constraint(YQLParser.Join_constraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#join_constraint}.
	 * @param ctx the parse tree
	 */
	void exitJoin_constraint(YQLParser.Join_constraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#returning_columns_list}.
	 * @param ctx the parse tree
	 */
	void enterReturning_columns_list(YQLParser.Returning_columns_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#returning_columns_list}.
	 * @param ctx the parse tree
	 */
	void exitReturning_columns_list(YQLParser.Returning_columns_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#into_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterInto_table_stmt(YQLParser.Into_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#into_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitInto_table_stmt(YQLParser.Into_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#into_values_source}.
	 * @param ctx the parse tree
	 */
	void enterInto_values_source(YQLParser.Into_values_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#into_values_source}.
	 * @param ctx the parse tree
	 */
	void exitInto_values_source(YQLParser.Into_values_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#values_stmt}.
	 * @param ctx the parse tree
	 */
	void enterValues_stmt(YQLParser.Values_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#values_stmt}.
	 * @param ctx the parse tree
	 */
	void exitValues_stmt(YQLParser.Values_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#values_source}.
	 * @param ctx the parse tree
	 */
	void enterValues_source(YQLParser.Values_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#values_source}.
	 * @param ctx the parse tree
	 */
	void exitValues_source(YQLParser.Values_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#values_source_row_list}.
	 * @param ctx the parse tree
	 */
	void enterValues_source_row_list(YQLParser.Values_source_row_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#values_source_row_list}.
	 * @param ctx the parse tree
	 */
	void exitValues_source_row_list(YQLParser.Values_source_row_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#values_source_row}.
	 * @param ctx the parse tree
	 */
	void enterValues_source_row(YQLParser.Values_source_rowContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#values_source_row}.
	 * @param ctx the parse tree
	 */
	void exitValues_source_row(YQLParser.Values_source_rowContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#simple_values_source}.
	 * @param ctx the parse tree
	 */
	void enterSimple_values_source(YQLParser.Simple_values_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#simple_values_source}.
	 * @param ctx the parse tree
	 */
	void exitSimple_values_source(YQLParser.Simple_values_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_external_data_source_stmt(YQLParser.Create_external_data_source_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_external_data_source_stmt(YQLParser.Create_external_data_source_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_external_data_source_stmt(YQLParser.Alter_external_data_source_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_external_data_source_stmt(YQLParser.Alter_external_data_source_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_external_data_source_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_external_data_source_action(YQLParser.Alter_external_data_source_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_external_data_source_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_external_data_source_action(YQLParser.Alter_external_data_source_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_external_data_source_stmt(YQLParser.Drop_external_data_source_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_external_data_source_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_external_data_source_stmt(YQLParser.Drop_external_data_source_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_view_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_view_stmt(YQLParser.Create_view_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_view_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_view_stmt(YQLParser.Create_view_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_view_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_view_stmt(YQLParser.Drop_view_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_view_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_view_stmt(YQLParser.Drop_view_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#upsert_object_stmt}.
	 * @param ctx the parse tree
	 */
	void enterUpsert_object_stmt(YQLParser.Upsert_object_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#upsert_object_stmt}.
	 * @param ctx the parse tree
	 */
	void exitUpsert_object_stmt(YQLParser.Upsert_object_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_object_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_object_stmt(YQLParser.Create_object_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_object_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_object_stmt(YQLParser.Create_object_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_object_features}.
	 * @param ctx the parse tree
	 */
	void enterCreate_object_features(YQLParser.Create_object_featuresContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_object_features}.
	 * @param ctx the parse tree
	 */
	void exitCreate_object_features(YQLParser.Create_object_featuresContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_object_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_object_stmt(YQLParser.Alter_object_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_object_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_object_stmt(YQLParser.Alter_object_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_object_features}.
	 * @param ctx the parse tree
	 */
	void enterAlter_object_features(YQLParser.Alter_object_featuresContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_object_features}.
	 * @param ctx the parse tree
	 */
	void exitAlter_object_features(YQLParser.Alter_object_featuresContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_object_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_object_stmt(YQLParser.Drop_object_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_object_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_object_stmt(YQLParser.Drop_object_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_object_features}.
	 * @param ctx the parse tree
	 */
	void enterDrop_object_features(YQLParser.Drop_object_featuresContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_object_features}.
	 * @param ctx the parse tree
	 */
	void exitDrop_object_features(YQLParser.Drop_object_featuresContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_feature_value}.
	 * @param ctx the parse tree
	 */
	void enterObject_feature_value(YQLParser.Object_feature_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_feature_value}.
	 * @param ctx the parse tree
	 */
	void exitObject_feature_value(YQLParser.Object_feature_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_feature_kv}.
	 * @param ctx the parse tree
	 */
	void enterObject_feature_kv(YQLParser.Object_feature_kvContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_feature_kv}.
	 * @param ctx the parse tree
	 */
	void exitObject_feature_kv(YQLParser.Object_feature_kvContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_feature_flag}.
	 * @param ctx the parse tree
	 */
	void enterObject_feature_flag(YQLParser.Object_feature_flagContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_feature_flag}.
	 * @param ctx the parse tree
	 */
	void exitObject_feature_flag(YQLParser.Object_feature_flagContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_feature}.
	 * @param ctx the parse tree
	 */
	void enterObject_feature(YQLParser.Object_featureContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_feature}.
	 * @param ctx the parse tree
	 */
	void exitObject_feature(YQLParser.Object_featureContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_features}.
	 * @param ctx the parse tree
	 */
	void enterObject_features(YQLParser.Object_featuresContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_features}.
	 * @param ctx the parse tree
	 */
	void exitObject_features(YQLParser.Object_featuresContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_type_ref}.
	 * @param ctx the parse tree
	 */
	void enterObject_type_ref(YQLParser.Object_type_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_type_ref}.
	 * @param ctx the parse tree
	 */
	void exitObject_type_ref(YQLParser.Object_type_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_table_stmt(YQLParser.Create_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_table_stmt(YQLParser.Create_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_table_entry}.
	 * @param ctx the parse tree
	 */
	void enterCreate_table_entry(YQLParser.Create_table_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_table_entry}.
	 * @param ctx the parse tree
	 */
	void exitCreate_table_entry(YQLParser.Create_table_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_backup_collection_stmt(YQLParser.Create_backup_collection_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_backup_collection_stmt(YQLParser.Create_backup_collection_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_backup_collection_stmt(YQLParser.Alter_backup_collection_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_backup_collection_stmt(YQLParser.Alter_backup_collection_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_backup_collection_stmt(YQLParser.Drop_backup_collection_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_backup_collection_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_backup_collection_stmt(YQLParser.Drop_backup_collection_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_backup_collection_entries}.
	 * @param ctx the parse tree
	 */
	void enterCreate_backup_collection_entries(YQLParser.Create_backup_collection_entriesContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_backup_collection_entries}.
	 * @param ctx the parse tree
	 */
	void exitCreate_backup_collection_entries(YQLParser.Create_backup_collection_entriesContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_backup_collection_entries_many}.
	 * @param ctx the parse tree
	 */
	void enterCreate_backup_collection_entries_many(YQLParser.Create_backup_collection_entries_manyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_backup_collection_entries_many}.
	 * @param ctx the parse tree
	 */
	void exitCreate_backup_collection_entries_many(YQLParser.Create_backup_collection_entries_manyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_list}.
	 * @param ctx the parse tree
	 */
	void enterTable_list(YQLParser.Table_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_list}.
	 * @param ctx the parse tree
	 */
	void exitTable_list(YQLParser.Table_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_backup_collection_actions}.
	 * @param ctx the parse tree
	 */
	void enterAlter_backup_collection_actions(YQLParser.Alter_backup_collection_actionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_backup_collection_actions}.
	 * @param ctx the parse tree
	 */
	void exitAlter_backup_collection_actions(YQLParser.Alter_backup_collection_actionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_backup_collection_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_backup_collection_action(YQLParser.Alter_backup_collection_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_backup_collection_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_backup_collection_action(YQLParser.Alter_backup_collection_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_backup_collection_entries}.
	 * @param ctx the parse tree
	 */
	void enterAlter_backup_collection_entries(YQLParser.Alter_backup_collection_entriesContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_backup_collection_entries}.
	 * @param ctx the parse tree
	 */
	void exitAlter_backup_collection_entries(YQLParser.Alter_backup_collection_entriesContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_backup_collection_entry}.
	 * @param ctx the parse tree
	 */
	void enterAlter_backup_collection_entry(YQLParser.Alter_backup_collection_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_backup_collection_entry}.
	 * @param ctx the parse tree
	 */
	void exitAlter_backup_collection_entry(YQLParser.Alter_backup_collection_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#backup_collection}.
	 * @param ctx the parse tree
	 */
	void enterBackup_collection(YQLParser.Backup_collectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#backup_collection}.
	 * @param ctx the parse tree
	 */
	void exitBackup_collection(YQLParser.Backup_collectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#backup_collection_settings}.
	 * @param ctx the parse tree
	 */
	void enterBackup_collection_settings(YQLParser.Backup_collection_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#backup_collection_settings}.
	 * @param ctx the parse tree
	 */
	void exitBackup_collection_settings(YQLParser.Backup_collection_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#backup_collection_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterBackup_collection_settings_entry(YQLParser.Backup_collection_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#backup_collection_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitBackup_collection_settings_entry(YQLParser.Backup_collection_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#backup_stmt}.
	 * @param ctx the parse tree
	 */
	void enterBackup_stmt(YQLParser.Backup_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#backup_stmt}.
	 * @param ctx the parse tree
	 */
	void exitBackup_stmt(YQLParser.Backup_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#restore_stmt}.
	 * @param ctx the parse tree
	 */
	void enterRestore_stmt(YQLParser.Restore_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#restore_stmt}.
	 * @param ctx the parse tree
	 */
	void exitRestore_stmt(YQLParser.Restore_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_database_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_database_stmt(YQLParser.Alter_database_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_database_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_database_stmt(YQLParser.Alter_database_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_inherits}.
	 * @param ctx the parse tree
	 */
	void enterTable_inherits(YQLParser.Table_inheritsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_inherits}.
	 * @param ctx the parse tree
	 */
	void exitTable_inherits(YQLParser.Table_inheritsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_partition_by}.
	 * @param ctx the parse tree
	 */
	void enterTable_partition_by(YQLParser.Table_partition_byContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_partition_by}.
	 * @param ctx the parse tree
	 */
	void exitTable_partition_by(YQLParser.Table_partition_byContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#with_table_settings}.
	 * @param ctx the parse tree
	 */
	void enterWith_table_settings(YQLParser.With_table_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#with_table_settings}.
	 * @param ctx the parse tree
	 */
	void exitWith_table_settings(YQLParser.With_table_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_tablestore}.
	 * @param ctx the parse tree
	 */
	void enterTable_tablestore(YQLParser.Table_tablestoreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_tablestore}.
	 * @param ctx the parse tree
	 */
	void exitTable_tablestore(YQLParser.Table_tablestoreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterTable_settings_entry(YQLParser.Table_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitTable_settings_entry(YQLParser.Table_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_as_source}.
	 * @param ctx the parse tree
	 */
	void enterTable_as_source(YQLParser.Table_as_sourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_as_source}.
	 * @param ctx the parse tree
	 */
	void exitTable_as_source(YQLParser.Table_as_sourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_stmt(YQLParser.Alter_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_stmt(YQLParser.Alter_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_action(YQLParser.Alter_table_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_action(YQLParser.Alter_table_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_external_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_external_table_stmt(YQLParser.Alter_external_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_external_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_external_table_stmt(YQLParser.Alter_external_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_external_table_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_external_table_action(YQLParser.Alter_external_table_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_external_table_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_external_table_action(YQLParser.Alter_external_table_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_store_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_store_stmt(YQLParser.Alter_table_store_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_store_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_store_stmt(YQLParser.Alter_table_store_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_store_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_store_action(YQLParser.Alter_table_store_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_store_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_store_action(YQLParser.Alter_table_store_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_add_column}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_add_column(YQLParser.Alter_table_add_columnContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_add_column}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_add_column(YQLParser.Alter_table_add_columnContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_drop_column}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_drop_column(YQLParser.Alter_table_drop_columnContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_drop_column}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_drop_column(YQLParser.Alter_table_drop_columnContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_column}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_column(YQLParser.Alter_table_alter_columnContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_column}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_column(YQLParser.Alter_table_alter_columnContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_column_drop_not_null}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_column_drop_not_null(YQLParser.Alter_table_alter_column_drop_not_nullContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_column_drop_not_null}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_column_drop_not_null(YQLParser.Alter_table_alter_column_drop_not_nullContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_add_column_family}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_add_column_family(YQLParser.Alter_table_add_column_familyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_add_column_family}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_add_column_family(YQLParser.Alter_table_add_column_familyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_column_family}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_column_family(YQLParser.Alter_table_alter_column_familyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_column_family}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_column_family(YQLParser.Alter_table_alter_column_familyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_set_table_setting_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_set_table_setting_uncompat(YQLParser.Alter_table_set_table_setting_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_set_table_setting_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_set_table_setting_uncompat(YQLParser.Alter_table_set_table_setting_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_set_table_setting_compat}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_set_table_setting_compat(YQLParser.Alter_table_set_table_setting_compatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_set_table_setting_compat}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_set_table_setting_compat(YQLParser.Alter_table_set_table_setting_compatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_reset_table_setting}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_reset_table_setting(YQLParser.Alter_table_reset_table_settingContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_reset_table_setting}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_reset_table_setting(YQLParser.Alter_table_reset_table_settingContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_add_index}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_add_index(YQLParser.Alter_table_add_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_add_index}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_add_index(YQLParser.Alter_table_add_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_drop_index}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_drop_index(YQLParser.Alter_table_drop_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_drop_index}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_drop_index(YQLParser.Alter_table_drop_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_rename_to}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_rename_to(YQLParser.Alter_table_rename_toContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_rename_to}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_rename_to(YQLParser.Alter_table_rename_toContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_rename_index_to}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_rename_index_to(YQLParser.Alter_table_rename_index_toContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_rename_index_to}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_rename_index_to(YQLParser.Alter_table_rename_index_toContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_add_changefeed}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_add_changefeed(YQLParser.Alter_table_add_changefeedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_add_changefeed}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_add_changefeed(YQLParser.Alter_table_add_changefeedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_changefeed}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_changefeed(YQLParser.Alter_table_alter_changefeedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_changefeed}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_changefeed(YQLParser.Alter_table_alter_changefeedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_drop_changefeed}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_drop_changefeed(YQLParser.Alter_table_drop_changefeedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_drop_changefeed}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_drop_changefeed(YQLParser.Alter_table_drop_changefeedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_index}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_index(YQLParser.Alter_table_alter_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_index}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_index(YQLParser.Alter_table_alter_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#column_schema}.
	 * @param ctx the parse tree
	 */
	void enterColumn_schema(YQLParser.Column_schemaContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#column_schema}.
	 * @param ctx the parse tree
	 */
	void exitColumn_schema(YQLParser.Column_schemaContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#family_relation}.
	 * @param ctx the parse tree
	 */
	void enterFamily_relation(YQLParser.Family_relationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#family_relation}.
	 * @param ctx the parse tree
	 */
	void exitFamily_relation(YQLParser.Family_relationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#opt_column_constraints}.
	 * @param ctx the parse tree
	 */
	void enterOpt_column_constraints(YQLParser.Opt_column_constraintsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#opt_column_constraints}.
	 * @param ctx the parse tree
	 */
	void exitOpt_column_constraints(YQLParser.Opt_column_constraintsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#column_order_by_specification}.
	 * @param ctx the parse tree
	 */
	void enterColumn_order_by_specification(YQLParser.Column_order_by_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#column_order_by_specification}.
	 * @param ctx the parse tree
	 */
	void exitColumn_order_by_specification(YQLParser.Column_order_by_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_constraint}.
	 * @param ctx the parse tree
	 */
	void enterTable_constraint(YQLParser.Table_constraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_constraint}.
	 * @param ctx the parse tree
	 */
	void exitTable_constraint(YQLParser.Table_constraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_index}.
	 * @param ctx the parse tree
	 */
	void enterTable_index(YQLParser.Table_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_index}.
	 * @param ctx the parse tree
	 */
	void exitTable_index(YQLParser.Table_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_index_type}.
	 * @param ctx the parse tree
	 */
	void enterTable_index_type(YQLParser.Table_index_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_index_type}.
	 * @param ctx the parse tree
	 */
	void exitTable_index_type(YQLParser.Table_index_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#global_index}.
	 * @param ctx the parse tree
	 */
	void enterGlobal_index(YQLParser.Global_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#global_index}.
	 * @param ctx the parse tree
	 */
	void exitGlobal_index(YQLParser.Global_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#local_index}.
	 * @param ctx the parse tree
	 */
	void enterLocal_index(YQLParser.Local_indexContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#local_index}.
	 * @param ctx the parse tree
	 */
	void exitLocal_index(YQLParser.Local_indexContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#index_subtype}.
	 * @param ctx the parse tree
	 */
	void enterIndex_subtype(YQLParser.Index_subtypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#index_subtype}.
	 * @param ctx the parse tree
	 */
	void exitIndex_subtype(YQLParser.Index_subtypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#with_index_settings}.
	 * @param ctx the parse tree
	 */
	void enterWith_index_settings(YQLParser.With_index_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#with_index_settings}.
	 * @param ctx the parse tree
	 */
	void exitWith_index_settings(YQLParser.With_index_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#index_setting_entry}.
	 * @param ctx the parse tree
	 */
	void enterIndex_setting_entry(YQLParser.Index_setting_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#index_setting_entry}.
	 * @param ctx the parse tree
	 */
	void exitIndex_setting_entry(YQLParser.Index_setting_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#index_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterIndex_setting_value(YQLParser.Index_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#index_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitIndex_setting_value(YQLParser.Index_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#changefeed}.
	 * @param ctx the parse tree
	 */
	void enterChangefeed(YQLParser.ChangefeedContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#changefeed}.
	 * @param ctx the parse tree
	 */
	void exitChangefeed(YQLParser.ChangefeedContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#changefeed_settings}.
	 * @param ctx the parse tree
	 */
	void enterChangefeed_settings(YQLParser.Changefeed_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#changefeed_settings}.
	 * @param ctx the parse tree
	 */
	void exitChangefeed_settings(YQLParser.Changefeed_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#changefeed_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterChangefeed_settings_entry(YQLParser.Changefeed_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#changefeed_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitChangefeed_settings_entry(YQLParser.Changefeed_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#changefeed_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterChangefeed_setting_value(YQLParser.Changefeed_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#changefeed_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitChangefeed_setting_value(YQLParser.Changefeed_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#changefeed_alter_settings}.
	 * @param ctx the parse tree
	 */
	void enterChangefeed_alter_settings(YQLParser.Changefeed_alter_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#changefeed_alter_settings}.
	 * @param ctx the parse tree
	 */
	void exitChangefeed_alter_settings(YQLParser.Changefeed_alter_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_setting_entry}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_setting_entry(YQLParser.Alter_table_setting_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_setting_entry}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_setting_entry(YQLParser.Alter_table_setting_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterTable_setting_value(YQLParser.Table_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitTable_setting_value(YQLParser.Table_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ttl_tier_list}.
	 * @param ctx the parse tree
	 */
	void enterTtl_tier_list(YQLParser.Ttl_tier_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ttl_tier_list}.
	 * @param ctx the parse tree
	 */
	void exitTtl_tier_list(YQLParser.Ttl_tier_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#ttl_tier_action}.
	 * @param ctx the parse tree
	 */
	void enterTtl_tier_action(YQLParser.Ttl_tier_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#ttl_tier_action}.
	 * @param ctx the parse tree
	 */
	void exitTtl_tier_action(YQLParser.Ttl_tier_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#family_entry}.
	 * @param ctx the parse tree
	 */
	void enterFamily_entry(YQLParser.Family_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#family_entry}.
	 * @param ctx the parse tree
	 */
	void exitFamily_entry(YQLParser.Family_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#family_settings}.
	 * @param ctx the parse tree
	 */
	void enterFamily_settings(YQLParser.Family_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#family_settings}.
	 * @param ctx the parse tree
	 */
	void exitFamily_settings(YQLParser.Family_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#family_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterFamily_settings_entry(YQLParser.Family_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#family_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitFamily_settings_entry(YQLParser.Family_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#family_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterFamily_setting_value(YQLParser.Family_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#family_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitFamily_setting_value(YQLParser.Family_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#split_boundaries}.
	 * @param ctx the parse tree
	 */
	void enterSplit_boundaries(YQLParser.Split_boundariesContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#split_boundaries}.
	 * @param ctx the parse tree
	 */
	void exitSplit_boundaries(YQLParser.Split_boundariesContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#literal_value_list}.
	 * @param ctx the parse tree
	 */
	void enterLiteral_value_list(YQLParser.Literal_value_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#literal_value_list}.
	 * @param ctx the parse tree
	 */
	void exitLiteral_value_list(YQLParser.Literal_value_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_table_alter_index_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_table_alter_index_action(YQLParser.Alter_table_alter_index_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_table_alter_index_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_table_alter_index_action(YQLParser.Alter_table_alter_index_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_table_stmt(YQLParser.Drop_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_table_stmt(YQLParser.Drop_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_user_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_user_stmt(YQLParser.Create_user_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_user_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_user_stmt(YQLParser.Create_user_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_user_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_user_stmt(YQLParser.Alter_user_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_user_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_user_stmt(YQLParser.Alter_user_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_group_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_group_stmt(YQLParser.Create_group_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_group_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_group_stmt(YQLParser.Create_group_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_group_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_group_stmt(YQLParser.Alter_group_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_group_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_group_stmt(YQLParser.Alter_group_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_role_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_role_stmt(YQLParser.Drop_role_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_role_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_role_stmt(YQLParser.Drop_role_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#role_name}.
	 * @param ctx the parse tree
	 */
	void enterRole_name(YQLParser.Role_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#role_name}.
	 * @param ctx the parse tree
	 */
	void exitRole_name(YQLParser.Role_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#user_option}.
	 * @param ctx the parse tree
	 */
	void enterUser_option(YQLParser.User_optionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#user_option}.
	 * @param ctx the parse tree
	 */
	void exitUser_option(YQLParser.User_optionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#authentication_option}.
	 * @param ctx the parse tree
	 */
	void enterAuthentication_option(YQLParser.Authentication_optionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#authentication_option}.
	 * @param ctx the parse tree
	 */
	void exitAuthentication_option(YQLParser.Authentication_optionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#password_option}.
	 * @param ctx the parse tree
	 */
	void enterPassword_option(YQLParser.Password_optionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#password_option}.
	 * @param ctx the parse tree
	 */
	void exitPassword_option(YQLParser.Password_optionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#password_value}.
	 * @param ctx the parse tree
	 */
	void enterPassword_value(YQLParser.Password_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#password_value}.
	 * @param ctx the parse tree
	 */
	void exitPassword_value(YQLParser.Password_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#hash_option}.
	 * @param ctx the parse tree
	 */
	void enterHash_option(YQLParser.Hash_optionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#hash_option}.
	 * @param ctx the parse tree
	 */
	void exitHash_option(YQLParser.Hash_optionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#login_option}.
	 * @param ctx the parse tree
	 */
	void enterLogin_option(YQLParser.Login_optionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#login_option}.
	 * @param ctx the parse tree
	 */
	void exitLogin_option(YQLParser.Login_optionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#grant_permissions_stmt}.
	 * @param ctx the parse tree
	 */
	void enterGrant_permissions_stmt(YQLParser.Grant_permissions_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#grant_permissions_stmt}.
	 * @param ctx the parse tree
	 */
	void exitGrant_permissions_stmt(YQLParser.Grant_permissions_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#revoke_permissions_stmt}.
	 * @param ctx the parse tree
	 */
	void enterRevoke_permissions_stmt(YQLParser.Revoke_permissions_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#revoke_permissions_stmt}.
	 * @param ctx the parse tree
	 */
	void exitRevoke_permissions_stmt(YQLParser.Revoke_permissions_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#permission_id}.
	 * @param ctx the parse tree
	 */
	void enterPermission_id(YQLParser.Permission_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#permission_id}.
	 * @param ctx the parse tree
	 */
	void exitPermission_id(YQLParser.Permission_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#permission_name}.
	 * @param ctx the parse tree
	 */
	void enterPermission_name(YQLParser.Permission_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#permission_name}.
	 * @param ctx the parse tree
	 */
	void exitPermission_name(YQLParser.Permission_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#permission_name_target}.
	 * @param ctx the parse tree
	 */
	void enterPermission_name_target(YQLParser.Permission_name_targetContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#permission_name_target}.
	 * @param ctx the parse tree
	 */
	void exitPermission_name_target(YQLParser.Permission_name_targetContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_resource_pool_stmt(YQLParser.Create_resource_pool_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_resource_pool_stmt(YQLParser.Create_resource_pool_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_resource_pool_stmt(YQLParser.Alter_resource_pool_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_resource_pool_stmt(YQLParser.Alter_resource_pool_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_resource_pool_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_resource_pool_action(YQLParser.Alter_resource_pool_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_resource_pool_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_resource_pool_action(YQLParser.Alter_resource_pool_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_resource_pool_stmt(YQLParser.Drop_resource_pool_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_resource_pool_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_resource_pool_stmt(YQLParser.Drop_resource_pool_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_resource_pool_classifier_stmt(YQLParser.Create_resource_pool_classifier_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_resource_pool_classifier_stmt(YQLParser.Create_resource_pool_classifier_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_resource_pool_classifier_stmt(YQLParser.Alter_resource_pool_classifier_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_resource_pool_classifier_stmt(YQLParser.Alter_resource_pool_classifier_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_resource_pool_classifier_action(YQLParser.Alter_resource_pool_classifier_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_resource_pool_classifier_action(YQLParser.Alter_resource_pool_classifier_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_resource_pool_classifier_stmt(YQLParser.Drop_resource_pool_classifier_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_resource_pool_classifier_stmt(YQLParser.Drop_resource_pool_classifier_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_replication_stmt(YQLParser.Create_replication_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_replication_stmt(YQLParser.Create_replication_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#replication_target}.
	 * @param ctx the parse tree
	 */
	void enterReplication_target(YQLParser.Replication_targetContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#replication_target}.
	 * @param ctx the parse tree
	 */
	void exitReplication_target(YQLParser.Replication_targetContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#replication_settings}.
	 * @param ctx the parse tree
	 */
	void enterReplication_settings(YQLParser.Replication_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#replication_settings}.
	 * @param ctx the parse tree
	 */
	void exitReplication_settings(YQLParser.Replication_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#replication_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterReplication_settings_entry(YQLParser.Replication_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#replication_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitReplication_settings_entry(YQLParser.Replication_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_replication_stmt(YQLParser.Alter_replication_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_replication_stmt(YQLParser.Alter_replication_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_replication_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_replication_action(YQLParser.Alter_replication_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_replication_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_replication_action(YQLParser.Alter_replication_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_replication_set_setting}.
	 * @param ctx the parse tree
	 */
	void enterAlter_replication_set_setting(YQLParser.Alter_replication_set_settingContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_replication_set_setting}.
	 * @param ctx the parse tree
	 */
	void exitAlter_replication_set_setting(YQLParser.Alter_replication_set_settingContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_replication_stmt(YQLParser.Drop_replication_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_replication_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_replication_stmt(YQLParser.Drop_replication_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#lambda_or_parameter}.
	 * @param ctx the parse tree
	 */
	void enterLambda_or_parameter(YQLParser.Lambda_or_parameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#lambda_or_parameter}.
	 * @param ctx the parse tree
	 */
	void exitLambda_or_parameter(YQLParser.Lambda_or_parameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_transfer_stmt(YQLParser.Create_transfer_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_transfer_stmt(YQLParser.Create_transfer_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#transfer_settings}.
	 * @param ctx the parse tree
	 */
	void enterTransfer_settings(YQLParser.Transfer_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#transfer_settings}.
	 * @param ctx the parse tree
	 */
	void exitTransfer_settings(YQLParser.Transfer_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#transfer_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterTransfer_settings_entry(YQLParser.Transfer_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#transfer_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitTransfer_settings_entry(YQLParser.Transfer_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_transfer_stmt(YQLParser.Alter_transfer_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_transfer_stmt(YQLParser.Alter_transfer_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_transfer_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_transfer_action(YQLParser.Alter_transfer_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_transfer_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_transfer_action(YQLParser.Alter_transfer_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_transfer_set_setting}.
	 * @param ctx the parse tree
	 */
	void enterAlter_transfer_set_setting(YQLParser.Alter_transfer_set_settingContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_transfer_set_setting}.
	 * @param ctx the parse tree
	 */
	void exitAlter_transfer_set_setting(YQLParser.Alter_transfer_set_settingContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_transfer_set_using}.
	 * @param ctx the parse tree
	 */
	void enterAlter_transfer_set_using(YQLParser.Alter_transfer_set_usingContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_transfer_set_using}.
	 * @param ctx the parse tree
	 */
	void exitAlter_transfer_set_using(YQLParser.Alter_transfer_set_usingContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_transfer_stmt(YQLParser.Drop_transfer_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_transfer_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_transfer_stmt(YQLParser.Drop_transfer_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#action_or_subquery_args}.
	 * @param ctx the parse tree
	 */
	void enterAction_or_subquery_args(YQLParser.Action_or_subquery_argsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#action_or_subquery_args}.
	 * @param ctx the parse tree
	 */
	void exitAction_or_subquery_args(YQLParser.Action_or_subquery_argsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#define_action_or_subquery_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDefine_action_or_subquery_stmt(YQLParser.Define_action_or_subquery_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#define_action_or_subquery_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDefine_action_or_subquery_stmt(YQLParser.Define_action_or_subquery_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#define_action_or_subquery_body}.
	 * @param ctx the parse tree
	 */
	void enterDefine_action_or_subquery_body(YQLParser.Define_action_or_subquery_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#define_action_or_subquery_body}.
	 * @param ctx the parse tree
	 */
	void exitDefine_action_or_subquery_body(YQLParser.Define_action_or_subquery_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void enterIf_stmt(YQLParser.If_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void exitIf_stmt(YQLParser.If_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#for_stmt}.
	 * @param ctx the parse tree
	 */
	void enterFor_stmt(YQLParser.For_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#for_stmt}.
	 * @param ctx the parse tree
	 */
	void exitFor_stmt(YQLParser.For_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_ref}.
	 * @param ctx the parse tree
	 */
	void enterTable_ref(YQLParser.Table_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_ref}.
	 * @param ctx the parse tree
	 */
	void exitTable_ref(YQLParser.Table_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_key}.
	 * @param ctx the parse tree
	 */
	void enterTable_key(YQLParser.Table_keyContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_key}.
	 * @param ctx the parse tree
	 */
	void exitTable_key(YQLParser.Table_keyContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_arg}.
	 * @param ctx the parse tree
	 */
	void enterTable_arg(YQLParser.Table_argContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_arg}.
	 * @param ctx the parse tree
	 */
	void exitTable_arg(YQLParser.Table_argContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_hints}.
	 * @param ctx the parse tree
	 */
	void enterTable_hints(YQLParser.Table_hintsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_hints}.
	 * @param ctx the parse tree
	 */
	void exitTable_hints(YQLParser.Table_hintsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#table_hint}.
	 * @param ctx the parse tree
	 */
	void enterTable_hint(YQLParser.Table_hintContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#table_hint}.
	 * @param ctx the parse tree
	 */
	void exitTable_hint(YQLParser.Table_hintContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#object_ref}.
	 * @param ctx the parse tree
	 */
	void enterObject_ref(YQLParser.Object_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#object_ref}.
	 * @param ctx the parse tree
	 */
	void exitObject_ref(YQLParser.Object_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#simple_table_ref_core}.
	 * @param ctx the parse tree
	 */
	void enterSimple_table_ref_core(YQLParser.Simple_table_ref_coreContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#simple_table_ref_core}.
	 * @param ctx the parse tree
	 */
	void exitSimple_table_ref_core(YQLParser.Simple_table_ref_coreContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#simple_table_ref}.
	 * @param ctx the parse tree
	 */
	void enterSimple_table_ref(YQLParser.Simple_table_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#simple_table_ref}.
	 * @param ctx the parse tree
	 */
	void exitSimple_table_ref(YQLParser.Simple_table_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#into_simple_table_ref}.
	 * @param ctx the parse tree
	 */
	void enterInto_simple_table_ref(YQLParser.Into_simple_table_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#into_simple_table_ref}.
	 * @param ctx the parse tree
	 */
	void exitInto_simple_table_ref(YQLParser.Into_simple_table_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#delete_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDelete_stmt(YQLParser.Delete_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#delete_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDelete_stmt(YQLParser.Delete_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#update_stmt}.
	 * @param ctx the parse tree
	 */
	void enterUpdate_stmt(YQLParser.Update_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#update_stmt}.
	 * @param ctx the parse tree
	 */
	void exitUpdate_stmt(YQLParser.Update_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#set_clause_choice}.
	 * @param ctx the parse tree
	 */
	void enterSet_clause_choice(YQLParser.Set_clause_choiceContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#set_clause_choice}.
	 * @param ctx the parse tree
	 */
	void exitSet_clause_choice(YQLParser.Set_clause_choiceContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#set_clause_list}.
	 * @param ctx the parse tree
	 */
	void enterSet_clause_list(YQLParser.Set_clause_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#set_clause_list}.
	 * @param ctx the parse tree
	 */
	void exitSet_clause_list(YQLParser.Set_clause_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#set_clause}.
	 * @param ctx the parse tree
	 */
	void enterSet_clause(YQLParser.Set_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#set_clause}.
	 * @param ctx the parse tree
	 */
	void exitSet_clause(YQLParser.Set_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#set_target}.
	 * @param ctx the parse tree
	 */
	void enterSet_target(YQLParser.Set_targetContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#set_target}.
	 * @param ctx the parse tree
	 */
	void exitSet_target(YQLParser.Set_targetContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#multiple_column_assignment}.
	 * @param ctx the parse tree
	 */
	void enterMultiple_column_assignment(YQLParser.Multiple_column_assignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#multiple_column_assignment}.
	 * @param ctx the parse tree
	 */
	void exitMultiple_column_assignment(YQLParser.Multiple_column_assignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#set_target_list}.
	 * @param ctx the parse tree
	 */
	void enterSet_target_list(YQLParser.Set_target_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#set_target_list}.
	 * @param ctx the parse tree
	 */
	void exitSet_target_list(YQLParser.Set_target_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCreate_topic_stmt(YQLParser.Create_topic_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCreate_topic_stmt(YQLParser.Create_topic_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_topic_entries}.
	 * @param ctx the parse tree
	 */
	void enterCreate_topic_entries(YQLParser.Create_topic_entriesContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_topic_entries}.
	 * @param ctx the parse tree
	 */
	void exitCreate_topic_entries(YQLParser.Create_topic_entriesContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#create_topic_entry}.
	 * @param ctx the parse tree
	 */
	void enterCreate_topic_entry(YQLParser.Create_topic_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#create_topic_entry}.
	 * @param ctx the parse tree
	 */
	void exitCreate_topic_entry(YQLParser.Create_topic_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#with_topic_settings}.
	 * @param ctx the parse tree
	 */
	void enterWith_topic_settings(YQLParser.With_topic_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#with_topic_settings}.
	 * @param ctx the parse tree
	 */
	void exitWith_topic_settings(YQLParser.With_topic_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_stmt(YQLParser.Alter_topic_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_stmt(YQLParser.Alter_topic_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_action(YQLParser.Alter_topic_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_action(YQLParser.Alter_topic_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_add_consumer}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_add_consumer(YQLParser.Alter_topic_add_consumerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_add_consumer}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_add_consumer(YQLParser.Alter_topic_add_consumerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_create_consumer_entry}.
	 * @param ctx the parse tree
	 */
	void enterTopic_create_consumer_entry(YQLParser.Topic_create_consumer_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_create_consumer_entry}.
	 * @param ctx the parse tree
	 */
	void exitTopic_create_consumer_entry(YQLParser.Topic_create_consumer_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_alter_consumer}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_alter_consumer(YQLParser.Alter_topic_alter_consumerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_alter_consumer}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_alter_consumer(YQLParser.Alter_topic_alter_consumerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_alter_consumer_entry}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_alter_consumer_entry(YQLParser.Alter_topic_alter_consumer_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_alter_consumer_entry}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_alter_consumer_entry(YQLParser.Alter_topic_alter_consumer_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_drop_consumer}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_drop_consumer(YQLParser.Alter_topic_drop_consumerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_drop_consumer}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_drop_consumer(YQLParser.Alter_topic_drop_consumerContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_alter_consumer_set}.
	 * @param ctx the parse tree
	 */
	void enterTopic_alter_consumer_set(YQLParser.Topic_alter_consumer_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_alter_consumer_set}.
	 * @param ctx the parse tree
	 */
	void exitTopic_alter_consumer_set(YQLParser.Topic_alter_consumer_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_alter_consumer_reset}.
	 * @param ctx the parse tree
	 */
	void enterTopic_alter_consumer_reset(YQLParser.Topic_alter_consumer_resetContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_alter_consumer_reset}.
	 * @param ctx the parse tree
	 */
	void exitTopic_alter_consumer_reset(YQLParser.Topic_alter_consumer_resetContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_set_settings}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_set_settings(YQLParser.Alter_topic_set_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_set_settings}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_set_settings(YQLParser.Alter_topic_set_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_topic_reset_settings}.
	 * @param ctx the parse tree
	 */
	void enterAlter_topic_reset_settings(YQLParser.Alter_topic_reset_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_topic_reset_settings}.
	 * @param ctx the parse tree
	 */
	void exitAlter_topic_reset_settings(YQLParser.Alter_topic_reset_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#drop_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDrop_topic_stmt(YQLParser.Drop_topic_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#drop_topic_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDrop_topic_stmt(YQLParser.Drop_topic_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_settings}.
	 * @param ctx the parse tree
	 */
	void enterTopic_settings(YQLParser.Topic_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_settings}.
	 * @param ctx the parse tree
	 */
	void exitTopic_settings(YQLParser.Topic_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterTopic_settings_entry(YQLParser.Topic_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitTopic_settings_entry(YQLParser.Topic_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterTopic_setting_value(YQLParser.Topic_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitTopic_setting_value(YQLParser.Topic_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_consumer_with_settings}.
	 * @param ctx the parse tree
	 */
	void enterTopic_consumer_with_settings(YQLParser.Topic_consumer_with_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_consumer_with_settings}.
	 * @param ctx the parse tree
	 */
	void exitTopic_consumer_with_settings(YQLParser.Topic_consumer_with_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_consumer_settings}.
	 * @param ctx the parse tree
	 */
	void enterTopic_consumer_settings(YQLParser.Topic_consumer_settingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_consumer_settings}.
	 * @param ctx the parse tree
	 */
	void exitTopic_consumer_settings(YQLParser.Topic_consumer_settingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_consumer_settings_entry}.
	 * @param ctx the parse tree
	 */
	void enterTopic_consumer_settings_entry(YQLParser.Topic_consumer_settings_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_consumer_settings_entry}.
	 * @param ctx the parse tree
	 */
	void exitTopic_consumer_settings_entry(YQLParser.Topic_consumer_settings_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_consumer_setting_value}.
	 * @param ctx the parse tree
	 */
	void enterTopic_consumer_setting_value(YQLParser.Topic_consumer_setting_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_consumer_setting_value}.
	 * @param ctx the parse tree
	 */
	void exitTopic_consumer_setting_value(YQLParser.Topic_consumer_setting_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_ref}.
	 * @param ctx the parse tree
	 */
	void enterTopic_ref(YQLParser.Topic_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_ref}.
	 * @param ctx the parse tree
	 */
	void exitTopic_ref(YQLParser.Topic_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#topic_consumer_ref}.
	 * @param ctx the parse tree
	 */
	void enterTopic_consumer_ref(YQLParser.Topic_consumer_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#topic_consumer_ref}.
	 * @param ctx the parse tree
	 */
	void exitTopic_consumer_ref(YQLParser.Topic_consumer_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#null_treatment}.
	 * @param ctx the parse tree
	 */
	void enterNull_treatment(YQLParser.Null_treatmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#null_treatment}.
	 * @param ctx the parse tree
	 */
	void exitNull_treatment(YQLParser.Null_treatmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#filter_clause}.
	 * @param ctx the parse tree
	 */
	void enterFilter_clause(YQLParser.Filter_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#filter_clause}.
	 * @param ctx the parse tree
	 */
	void exitFilter_clause(YQLParser.Filter_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_name_or_specification}.
	 * @param ctx the parse tree
	 */
	void enterWindow_name_or_specification(YQLParser.Window_name_or_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_name_or_specification}.
	 * @param ctx the parse tree
	 */
	void exitWindow_name_or_specification(YQLParser.Window_name_or_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_name}.
	 * @param ctx the parse tree
	 */
	void enterWindow_name(YQLParser.Window_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_name}.
	 * @param ctx the parse tree
	 */
	void exitWindow_name(YQLParser.Window_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_clause}.
	 * @param ctx the parse tree
	 */
	void enterWindow_clause(YQLParser.Window_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_clause}.
	 * @param ctx the parse tree
	 */
	void exitWindow_clause(YQLParser.Window_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_definition_list}.
	 * @param ctx the parse tree
	 */
	void enterWindow_definition_list(YQLParser.Window_definition_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_definition_list}.
	 * @param ctx the parse tree
	 */
	void exitWindow_definition_list(YQLParser.Window_definition_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_definition}.
	 * @param ctx the parse tree
	 */
	void enterWindow_definition(YQLParser.Window_definitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_definition}.
	 * @param ctx the parse tree
	 */
	void exitWindow_definition(YQLParser.Window_definitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#new_window_name}.
	 * @param ctx the parse tree
	 */
	void enterNew_window_name(YQLParser.New_window_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#new_window_name}.
	 * @param ctx the parse tree
	 */
	void exitNew_window_name(YQLParser.New_window_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_specification}.
	 * @param ctx the parse tree
	 */
	void enterWindow_specification(YQLParser.Window_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_specification}.
	 * @param ctx the parse tree
	 */
	void exitWindow_specification(YQLParser.Window_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_specification_details}.
	 * @param ctx the parse tree
	 */
	void enterWindow_specification_details(YQLParser.Window_specification_detailsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_specification_details}.
	 * @param ctx the parse tree
	 */
	void exitWindow_specification_details(YQLParser.Window_specification_detailsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#existing_window_name}.
	 * @param ctx the parse tree
	 */
	void enterExisting_window_name(YQLParser.Existing_window_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#existing_window_name}.
	 * @param ctx the parse tree
	 */
	void exitExisting_window_name(YQLParser.Existing_window_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_partition_clause}.
	 * @param ctx the parse tree
	 */
	void enterWindow_partition_clause(YQLParser.Window_partition_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_partition_clause}.
	 * @param ctx the parse tree
	 */
	void exitWindow_partition_clause(YQLParser.Window_partition_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_order_clause}.
	 * @param ctx the parse tree
	 */
	void enterWindow_order_clause(YQLParser.Window_order_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_order_clause}.
	 * @param ctx the parse tree
	 */
	void exitWindow_order_clause(YQLParser.Window_order_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_clause}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_clause(YQLParser.Window_frame_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_clause}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_clause(YQLParser.Window_frame_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_units}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_units(YQLParser.Window_frame_unitsContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_units}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_units(YQLParser.Window_frame_unitsContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_extent}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_extent(YQLParser.Window_frame_extentContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_extent}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_extent(YQLParser.Window_frame_extentContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_between}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_between(YQLParser.Window_frame_betweenContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_between}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_between(YQLParser.Window_frame_betweenContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_bound}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_bound(YQLParser.Window_frame_boundContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_bound}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_bound(YQLParser.Window_frame_boundContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#window_frame_exclusion}.
	 * @param ctx the parse tree
	 */
	void enterWindow_frame_exclusion(YQLParser.Window_frame_exclusionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#window_frame_exclusion}.
	 * @param ctx the parse tree
	 */
	void exitWindow_frame_exclusion(YQLParser.Window_frame_exclusionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#use_stmt}.
	 * @param ctx the parse tree
	 */
	void enterUse_stmt(YQLParser.Use_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#use_stmt}.
	 * @param ctx the parse tree
	 */
	void exitUse_stmt(YQLParser.Use_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#subselect_stmt}.
	 * @param ctx the parse tree
	 */
	void enterSubselect_stmt(YQLParser.Subselect_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#subselect_stmt}.
	 * @param ctx the parse tree
	 */
	void exitSubselect_stmt(YQLParser.Subselect_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#named_nodes_stmt}.
	 * @param ctx the parse tree
	 */
	void enterNamed_nodes_stmt(YQLParser.Named_nodes_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#named_nodes_stmt}.
	 * @param ctx the parse tree
	 */
	void exitNamed_nodes_stmt(YQLParser.Named_nodes_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#commit_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCommit_stmt(YQLParser.Commit_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#commit_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCommit_stmt(YQLParser.Commit_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#rollback_stmt}.
	 * @param ctx the parse tree
	 */
	void enterRollback_stmt(YQLParser.Rollback_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#rollback_stmt}.
	 * @param ctx the parse tree
	 */
	void exitRollback_stmt(YQLParser.Rollback_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#analyze_table}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze_table(YQLParser.Analyze_tableContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#analyze_table}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze_table(YQLParser.Analyze_tableContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#analyze_table_list}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze_table_list(YQLParser.Analyze_table_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#analyze_table_list}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze_table_list(YQLParser.Analyze_table_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#analyze_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze_stmt(YQLParser.Analyze_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#analyze_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze_stmt(YQLParser.Analyze_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_sequence_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAlter_sequence_stmt(YQLParser.Alter_sequence_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_sequence_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAlter_sequence_stmt(YQLParser.Alter_sequence_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#alter_sequence_action}.
	 * @param ctx the parse tree
	 */
	void enterAlter_sequence_action(YQLParser.Alter_sequence_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#alter_sequence_action}.
	 * @param ctx the parse tree
	 */
	void exitAlter_sequence_action(YQLParser.Alter_sequence_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#show_create_table_stmt}.
	 * @param ctx the parse tree
	 */
	void enterShow_create_table_stmt(YQLParser.Show_create_table_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#show_create_table_stmt}.
	 * @param ctx the parse tree
	 */
	void exitShow_create_table_stmt(YQLParser.Show_create_table_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(YQLParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(YQLParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(YQLParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(YQLParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_schema}.
	 * @param ctx the parse tree
	 */
	void enterId_schema(YQLParser.Id_schemaContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_schema}.
	 * @param ctx the parse tree
	 */
	void exitId_schema(YQLParser.Id_schemaContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_expr}.
	 * @param ctx the parse tree
	 */
	void enterId_expr(YQLParser.Id_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_expr}.
	 * @param ctx the parse tree
	 */
	void exitId_expr(YQLParser.Id_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_expr_in}.
	 * @param ctx the parse tree
	 */
	void enterId_expr_in(YQLParser.Id_expr_inContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_expr_in}.
	 * @param ctx the parse tree
	 */
	void exitId_expr_in(YQLParser.Id_expr_inContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_window}.
	 * @param ctx the parse tree
	 */
	void enterId_window(YQLParser.Id_windowContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_window}.
	 * @param ctx the parse tree
	 */
	void exitId_window(YQLParser.Id_windowContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_table}.
	 * @param ctx the parse tree
	 */
	void enterId_table(YQLParser.Id_tableContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_table}.
	 * @param ctx the parse tree
	 */
	void exitId_table(YQLParser.Id_tableContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_without}.
	 * @param ctx the parse tree
	 */
	void enterId_without(YQLParser.Id_withoutContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_without}.
	 * @param ctx the parse tree
	 */
	void exitId_without(YQLParser.Id_withoutContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_hint}.
	 * @param ctx the parse tree
	 */
	void enterId_hint(YQLParser.Id_hintContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_hint}.
	 * @param ctx the parse tree
	 */
	void exitId_hint(YQLParser.Id_hintContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_as_compat}.
	 * @param ctx the parse tree
	 */
	void enterId_as_compat(YQLParser.Id_as_compatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_as_compat}.
	 * @param ctx the parse tree
	 */
	void exitId_as_compat(YQLParser.Id_as_compatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id}.
	 * @param ctx the parse tree
	 */
	void enterAn_id(YQLParser.An_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id}.
	 * @param ctx the parse tree
	 */
	void exitAn_id(YQLParser.An_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_or_type}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_or_type(YQLParser.An_id_or_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_or_type}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_or_type(YQLParser.An_id_or_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_schema}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_schema(YQLParser.An_id_schemaContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_schema}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_schema(YQLParser.An_id_schemaContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_expr}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_expr(YQLParser.An_id_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_expr}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_expr(YQLParser.An_id_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_expr_in}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_expr_in(YQLParser.An_id_expr_inContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_expr_in}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_expr_in(YQLParser.An_id_expr_inContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_window}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_window(YQLParser.An_id_windowContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_window}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_window(YQLParser.An_id_windowContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_table}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_table(YQLParser.An_id_tableContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_table}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_table(YQLParser.An_id_tableContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_without}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_without(YQLParser.An_id_withoutContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_without}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_without(YQLParser.An_id_withoutContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_hint}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_hint(YQLParser.An_id_hintContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_hint}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_hint(YQLParser.An_id_hintContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_pure}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_pure(YQLParser.An_id_pureContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_pure}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_pure(YQLParser.An_id_pureContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#an_id_as_compat}.
	 * @param ctx the parse tree
	 */
	void enterAn_id_as_compat(YQLParser.An_id_as_compatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#an_id_as_compat}.
	 * @param ctx the parse tree
	 */
	void exitAn_id_as_compat(YQLParser.An_id_as_compatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#view_name}.
	 * @param ctx the parse tree
	 */
	void enterView_name(YQLParser.View_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#view_name}.
	 * @param ctx the parse tree
	 */
	void exitView_name(YQLParser.View_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#opt_id_prefix}.
	 * @param ctx the parse tree
	 */
	void enterOpt_id_prefix(YQLParser.Opt_id_prefixContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#opt_id_prefix}.
	 * @param ctx the parse tree
	 */
	void exitOpt_id_prefix(YQLParser.Opt_id_prefixContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#cluster_expr}.
	 * @param ctx the parse tree
	 */
	void enterCluster_expr(YQLParser.Cluster_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#cluster_expr}.
	 * @param ctx the parse tree
	 */
	void exitCluster_expr(YQLParser.Cluster_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_or_type}.
	 * @param ctx the parse tree
	 */
	void enterId_or_type(YQLParser.Id_or_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_or_type}.
	 * @param ctx the parse tree
	 */
	void exitId_or_type(YQLParser.Id_or_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#opt_id_prefix_or_type}.
	 * @param ctx the parse tree
	 */
	void enterOpt_id_prefix_or_type(YQLParser.Opt_id_prefix_or_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#opt_id_prefix_or_type}.
	 * @param ctx the parse tree
	 */
	void exitOpt_id_prefix_or_type(YQLParser.Opt_id_prefix_or_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_or_at}.
	 * @param ctx the parse tree
	 */
	void enterId_or_at(YQLParser.Id_or_atContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_or_at}.
	 * @param ctx the parse tree
	 */
	void exitId_or_at(YQLParser.Id_or_atContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_table_or_type}.
	 * @param ctx the parse tree
	 */
	void enterId_table_or_type(YQLParser.Id_table_or_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_table_or_type}.
	 * @param ctx the parse tree
	 */
	void exitId_table_or_type(YQLParser.Id_table_or_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#id_table_or_at}.
	 * @param ctx the parse tree
	 */
	void enterId_table_or_at(YQLParser.Id_table_or_atContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#id_table_or_at}.
	 * @param ctx the parse tree
	 */
	void exitId_table_or_at(YQLParser.Id_table_or_atContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword}.
	 * @param ctx the parse tree
	 */
	void enterKeyword(YQLParser.KeywordContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword}.
	 * @param ctx the parse tree
	 */
	void exitKeyword(YQLParser.KeywordContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_expr_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_expr_uncompat(YQLParser.Keyword_expr_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_expr_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_expr_uncompat(YQLParser.Keyword_expr_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_table_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_table_uncompat(YQLParser.Keyword_table_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_table_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_table_uncompat(YQLParser.Keyword_table_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_select_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_select_uncompat(YQLParser.Keyword_select_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_select_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_select_uncompat(YQLParser.Keyword_select_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_alter_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_alter_uncompat(YQLParser.Keyword_alter_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_alter_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_alter_uncompat(YQLParser.Keyword_alter_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_in_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_in_uncompat(YQLParser.Keyword_in_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_in_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_in_uncompat(YQLParser.Keyword_in_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_window_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_window_uncompat(YQLParser.Keyword_window_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_window_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_window_uncompat(YQLParser.Keyword_window_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_hint_uncompat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_hint_uncompat(YQLParser.Keyword_hint_uncompatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_hint_uncompat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_hint_uncompat(YQLParser.Keyword_hint_uncompatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_as_compat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_as_compat(YQLParser.Keyword_as_compatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_as_compat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_as_compat(YQLParser.Keyword_as_compatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#keyword_compat}.
	 * @param ctx the parse tree
	 */
	void enterKeyword_compat(YQLParser.Keyword_compatContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#keyword_compat}.
	 * @param ctx the parse tree
	 */
	void exitKeyword_compat(YQLParser.Keyword_compatContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#type_id}.
	 * @param ctx the parse tree
	 */
	void enterType_id(YQLParser.Type_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#type_id}.
	 * @param ctx the parse tree
	 */
	void exitType_id(YQLParser.Type_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#bool_value}.
	 * @param ctx the parse tree
	 */
	void enterBool_value(YQLParser.Bool_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#bool_value}.
	 * @param ctx the parse tree
	 */
	void exitBool_value(YQLParser.Bool_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#real}.
	 * @param ctx the parse tree
	 */
	void enterReal(YQLParser.RealContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#real}.
	 * @param ctx the parse tree
	 */
	void exitReal(YQLParser.RealContext ctx);
	/**
	 * Enter a parse tree produced by {@link YQLParser#integer}.
	 * @param ctx the parse tree
	 */
	void enterInteger(YQLParser.IntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link YQLParser#integer}.
	 * @param ctx the parse tree
	 */
	void exitInteger(YQLParser.IntegerContext ctx);
}